import { resolve } from 'path';
import { get } from 'request';
import { readFileSync, createWriteStream } from 'fs';

export class DownloadService {
    
  public async downloadFile(link: string, filename: string): Promise<void> {
    const downloadedFile = await get(link);
    const writableFile = createWriteStream(resolve('temp', filename));
    downloadedFile.pipe(writableFile);
  }

  public readFileFromTemp(filename: string): Buffer {
    const pathToSave: string = resolve('temp', filename);
    return readFileSync(pathToSave);
  }

}
