export type MCID = `${string}:${string}`;
type MCAmount = MCStack | MCAmountRange;
type MCAmountRange = [MCStack, MCStack];
interface MCEnchantment {
    enchantment: MCID;
    level: MCAmount;
}
export type MCItem = {
    item: MCID;
    nbt?: string;
    count?: MCAmount;
    dataTag?: number;
    itemTag?: string;
    durability?: MCAmount;
    potion?: MCID;
    enchantments?: MCEnchantment[];
    storedEnchantments?: MCEnchantment[];
};

type _MCEquipment = {
    headItem: MCItem;
    chestItem: MCItem;
    legItem: MCItem;
    bootItem: MCItem;
    handItem: MCItem;
    offhandItem: MCItem;
};

type _MCBlock = {
    id?: MCID;
    tag?: string;
    nbt?: string;
};

type _MCFluid = {
    id?: MCID;
    tag?: string;
};

export type MCState = { state_name: string; state_value: string };

export type MCDistance = {
    absolute?: MCAmount;
    horizontal?: MCAmount;
    x_axis?: MCAmount;
    y_axis?: MCAmount;
    z_axis?: MCAmount;
};

type _MCDamageType = {
    bypassesArmor?: boolean;
    bypassesInvulnerability?: boolean;
    bypassesMagic?: boolean;
    isExplosion?: boolean;
    isFire?: boolean;
    isMagic?: boolean;
    isProjectile?: boolean;
    isLightning?: boolean;
    directEntity?: MCEntity;
    sourceEntity?: MCEntity;
};

type _MCEntityFlags = {
    isOnFire?: boolean;
    isSneaking?: boolean;
    isSprinting?: boolean;
    isSwimming?: boolean;
    isBaby?: boolean;
};

type _MCEffect = {
    effect_type?: MCID;
    duration?: MCAmount;
    amplifier?: MCAmount;
};

type _MCDimension =
    | 'minecraft:overworld'
    | 'minecraft:the_nether'
    | 'minecraft:the_end';

type _MCFeature =
    | 'minecraft:pillager_outpost'
    | 'minecraft:mineshaft'
    | 'minecraft:mansion'
    | 'minecraft:jungle_pyramid'
    | 'minecraft:desert_pyramid'
    | 'minecraft:igloo'
    | 'minecraft:ruined_portal'
    | 'minecraft:shipwreck'
    | 'minecraft:swamp_hut'
    | 'minecraft:stronghold'
    | 'minecraft:monument'
    | 'minecraft:ocean_ruin'
    | 'minecraft:fortress'
    | 'minecraft:end_city'
    | 'minecraft:buried_treasure'
    | 'minecraft:village'
    | 'minecraft:nether_fossil'
    | 'minecraft:bastion_remnant';

export type MCLocation = {
    biome?: MCID;
    block?: _MCBlock;
    fluid?: _MCFluid;
    dimension?: _MCDimension;
    feature?: _MCFeature;
    x_axis?: MCAmount;
    y_axis?: MCAmount;
    z_axis?: MCAmount;
    light_level?: MCAmount;
    smokey?: boolean;
};

export type MCEntity = {
    entity?: MCID;
    nbt?: string;
    distance?: MCDistance;
    effects?: _MCEffect;
    location?: MCLocation;
    flags?: _MCEntityFlags;
    equipment?: _MCEquipment;
};

export type MCStack =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64;

export type MCDamage = {
    blocked?: boolean;
    dealt?: MCAmount;
    taken?: MCAmount;
    type?: _MCDamageType;
};

export type MCSlot = {
    empty?: MCAmount;
    full?: MCAmount;
    occupied?: MCAmount;
};
