export function  appendBaseUrl(data: any, req: any) {
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    return {
      ...data,
      image_url: data.image_url ? `${baseUrl}${data.image_url}` : null,
    };
  }
