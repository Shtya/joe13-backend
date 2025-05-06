export function parseJsonFields<T extends Record<string, any>>(dto: any, keys: string[]): T {
	for (const key of keys) {
	  if (typeof dto[key] === 'string') {
		try {
		  dto[key] = JSON.parse(dto[key]) ;
		} catch (e) {
		  console.warn(`Failed to parse ${key} as JSON`, e);
		}
	  }
	}
	return dto;
  }
  