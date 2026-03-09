export async function getMainScreenData(): Promise<{filename: string, url: string}[]> {
  const data = await fetch('https://api.for-pro.ch/slider-images', {
    method: 'GET',
  })

  return data.json()
}
