export default function bufferParser(result: any) {
  for (const row of result) {
    for (const key in row)
      if (Buffer.isBuffer(row[key])) row[key] = row[key].toString('binary');
  }

  return result;
}
