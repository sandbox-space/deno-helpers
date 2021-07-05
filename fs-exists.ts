/**
 * Test whether or not the given path exists by checking with the file system
 */
 export function fsExistsSync(filePath: string): boolean {
  try {
    Deno.lstatSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
}