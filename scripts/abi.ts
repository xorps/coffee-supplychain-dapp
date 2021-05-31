import fs from 'fs/promises';
import path from 'path';

const ABI_FILE = path.join('.', 'build', 'contracts', 'SupplyChain.json');
const DEST_FILE = path.join('.', 'src', 'abi', 'SupplyChain.json');

export async function main() {
    const buffer = await fs.readFile(ABI_FILE);
    const {abi, networks} = JSON.parse(buffer.toString());
    const data = JSON.stringify({abi, networks}, null, 4);
    await fs.writeFile(DEST_FILE, data);
}

main().catch(console.error);