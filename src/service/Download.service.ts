import { resolve } from 'path';
import { get } from 'request';
import { readFileSync, createWriteStream, existsSync, mkdirSync } from 'fs';

export class DownloadService {
    
  public async downloadFile(link: string, filename: string): Promise<void> {
    const absoluteFolderPath: string = resolve('temp');
    if (!existsSync(absoluteFolderPath)) {
      mkdirSync(absoluteFolderPath);
    }
    const downloadedFile = await get(link);
    const writableFile = createWriteStream(resolve('temp', filename));
    downloadedFile.pipe(writableFile);
  }

  public readFileFromTemp(filename: string): Buffer {
    const pathToSave: string = resolve('temp', filename);
    return readFileSync(pathToSave);
  }

}
