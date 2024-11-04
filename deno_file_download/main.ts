import { dirname } from "https://deno.land/std@0.120.0/path/mod.ts";

const url = Deno.args[0] // Récupère l'URL et le chemin du fichier en arguments
const filePath = Deno.args[1] ? Deno.args[1] : dirname(Deno.execPath()) + "/Menu_FoodLab.xlsx" // Chemin local de sauvegarde

console.log( import.meta.dirname )


if (!url) {
  console.error("Erreur : veuillez fournir une URL en paramètre.")
  Deno.exit(1)
}

// Fonction principale
async function downloadXlsx(url: string, filePath: string) {
  // Effectue la requête HTTP pour télécharger le fichier
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Erreur lors du téléchargement: ${response.statusText}`)
  }

  // Récupère le contenu du fichier en tant que Blob
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const fileData = new Uint8Array(arrayBuffer)

  // Sauvegarde le fichier localement
  await Deno.writeFile(filePath, fileData)
  console.log(`Fichier téléchargé et sauvegardé en tant que ${filePath}`)
}

downloadXlsx(url, filePath).catch(console.error)

Deno.cron("Run every fifteen minutes", "*/5 * * * *", () => {
  // for (let i = 0; i < 10; i++) {
    downloadXlsx(url, filePath).catch(console.error)
  // }
});