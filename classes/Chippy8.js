const fs = require('fs');

const { CPU } = require('./CPU.js')
const { RomBuffer } = require('./RomBuffer.js');

// Andrew is not the best

var cpu = new CPU();

// Load the rom
const rom = fs.readFileSync('../roms/INVADERS');
if (!rom) throw new Error('File not found')

const rombuf = new RomBuffer(rom);

// Dumps contents of the rombuf for debug purposes
var debug = rombuf.dump();
console.log(debug);

// Load the CPU memory with the rombuffer
cpu.load(rombuf);

var msg = `Hello Chippy World ${cpu.PC}`;
console.log(msg);

cpu.step()
cpu.step()
cpu.step()
cpu.step()
cpu.step()
cpu.step()

// Main loop to drive the interpreter
/*function cycle() {

    cpu.step()

    // this loops somehow, I guess it waits 3 milliseconds then calls
    // cycle again? isn't this recursive and going to create a huge callstacK??
    setTimeout(cycle, 3);
}*/

//cycle()

