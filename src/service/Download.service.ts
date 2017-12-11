import { resolve } from 'path';
import { get } from 'request';
import { readFileSync, createWriteStream, existsSync, mkdirSync } from 'fs';

export class DownloadService {
    
  public async downloadFile(link: string, filename: string): Promise<void> {
    const absolutePath: string = resolve('temp', filename);
    if (!existsSync(absolutePath)) {
      mkdirSync(resolve('temp'));
    }
    const downloadedFile = await get(link);
    const writableFile = createWriteStream(absolutePath);
    downloadedFile.pipe(writableFile);
  }

  public readFileFromTemp(filename: string): Buffer {
    const pathToSave: string = resolve('temp', filename);
    return readFileSync(pathToSave);
  }

}
