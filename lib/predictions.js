export function getCyclePeriods(cycles) {
  if (cycles.length === 0) return null;

  const cyclePeriods = [];
  let start, end;

  cycles.map((cycle, index) => {
    if (index === 0 && cycle.flow_intensity) {
      // First entry with flow
      start = cycle.date;
    } else {
      if (cycle.flow_intensity && !cycles[index - 1].flow_intensity) {
        // New period starts
        start = cycle.date;
      } else if (!cycle.flow_intensity && cycles[index - 1].flow_intensity) {
        // Period ends
        end = cycles[index - 1].date;
        cyclePeriods.push({
          start,
          end,
        });
        start = null;
        end = null;
      }
    }
    if (index === cycles.length - 1 && cycle.flow_intensity) {
      // Last entry with flow
      end = cycle.date;
      cyclePeriods.push({
        start,
        end,
      });
      start = null;
      end = null;
    }
  });

  return cyclePeriods;
}

export function calculateMeanCycle(cycles) {
  const cyclePeriods = getCyclePeriods(cycles);

  if (!cyclePeriods || cyclePeriods.length === 0) return null;

  const cycleLengths = cyclePeriods.map((period, index) => {
    if (index === 0) return null;
    const prevStart = new Date(cyclePeriods[index - 1].start);
    const currentStart = new Date(period.start);
    const diffTime = Math.abs(currentStart - prevStart);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }).filter(length => length >= 18 && length <= 45); // Filter out unrealistic cycle lengths

  if (cycleLengths.length === 0) return null;

  const meanCycleLength = cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length;

  return Math.round(meanCycleLength);
}

export async function predictNextPeriod(userId, lutealPhaseLength = 14) {
  const cyclePeriods = await getCyclePeriods(userId);
  const meanCycleLength = await calculateMeanCycle(userId);

  if (!cyclePeriods || cyclePeriods.length === 0 || !meanCycleLength) return null;

  const lastPeriod = cyclePeriods[cyclePeriods.length - 1];
  const lastStart = new Date(lastPeriod.start);
  const nextStart = new Date(lastStart.getTime() + meanCycleLength * 24 * 60 * 60 * 1000);
  const nextOvulation = new Date(nextStart.getTime() - lutealPhaseLength * 24 * 60 * 60 * 1000);
  const nextVertileStart = new Date(nextOvulation.getTime() - 4 * 24 * 60 * 60 * 1000);
  const nextVertileEnd = new Date(nextOvulation.getTime() + 1 * 24 * 60 * 60 * 1000);

  return {
    meanCycleLength,
    lastPeriod,
    nextPeriodStart: nextStart.toISOString().split('T')[0],
    nextOvulation: nextOvulation.toISOString().split('T')[0],
    nextVertileWindow: {
      start: nextVertileStart.toISOString().split('T')[0],
      end: nextVertileEnd.toISOString().split('T')[0],
    },
  };
}