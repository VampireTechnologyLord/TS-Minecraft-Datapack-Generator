import { Datapack, tess, __MCDatapack } from './dp_lib/implementation/dp_main';

// code here
// console.log(
//     Datapack('e', 'e', 'e', (dp) => {
//         dp.addAdvancement()
//             .setId('e')
//             .setName('e')
//             .setDescription('e')
//             .setRoot(true)
//             .addCriteria('e', 'minecraft:bee_nest_destroyed', {})
//             .build();
//     })
// );

Datapack('Test', 'test', 'Test datapack', (dp) => {
    dp.addAdvancement()
        .setId('test')
        .setName('test')
        .setDescription('test')
        .setRoot(true)
        .addCriteria('test', 'minecraft:bee_nest_destroyed', {})
        .build();
});

console.log(__MCDatapack.mc_advancements);
