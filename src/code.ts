import { Datapack } from './lib/implementation/datapack-main';

Datapack('Kumutu', 'ku', 'Akuameschock', (datapack) => {
    datapack
        .addAdvancement()
        .setRoot(true)
        .setName('qwertz')
        .setDescription('melonen baum')
        .setIcon('minecraft:melon')
        .setBackground('minecraft:textures/blocks/oak_log.png')
        .setType('challenge')
        .setId('qwertz')
        .addCriteria('e', 'minecraft:construct_beacon', {})
        .setSettings({ announceToChat: false, hidden: false, showToast: true })
        .build();
});
