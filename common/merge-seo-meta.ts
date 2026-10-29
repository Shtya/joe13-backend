export function mergeSeoMeta(
  current: Record<string, any> = {},
  incoming: Record<string, any> = {},
) {
  const next = { ...current, ...incoming };
  if (incoming?.en && typeof incoming.en === 'object' && !Array.isArray(incoming.en)) {
    next.en = { ...(current.en || {}), ...incoming.en };
  }
  if (incoming?.ar && typeof incoming.ar === 'object' && !Array.isArray(incoming.ar)) {
    next.ar = { ...(current.ar || {}), ...incoming.ar };
  }
  return next;
}
