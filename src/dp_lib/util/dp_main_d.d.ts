export type MCID = `${string}:${string}`;
/**
 * A number or range
 */
type MCNumber = number | [number, number];

/**
 * Enchantment data.
 */
interface MCEnchantment {
    /**
     * The id of the enchantment.
     */
    enchantment: MCID;
    /**
     * The level of the enchantment.
     */
    level?: MCNumber;
}

/**
 * Item data.
 */
export type MCItem = {
    /**
     * The id of the item.
     */
    item: MCID;
    /**
     * The nbt data of the item.
     */
    nbt?: string;
    /**
     * The amount of the item.
     */
    count?: MCNumber;
    /**
     * The data tag of the item.
     */
    dataTag?: number;
    /**
     * The item tag of the item.
     */
    itemTag?: string;
    /**
     * The durability of the item.
     */
    durability?: MCNumber;
    /**
     * The potion effect of the item (Only for potions).
     */
    potion?: MCID;
    /**
     * The enchantments that are applied on item.
     */
    enchantments?: MCEnchantment[];
    /**
     * The enchantments that are stored in the item (Only for enchanted books).
     */
    storedEnchantments?: MCEnchantment[];
};

/**
 * Entity Equipment.
 */
type _MCEquipment = {
    /**
     * The item in the head slot.
     */
    headItem?: MCItem;
    /**
     * The item in the chest slot.
     */
    chestItem?: MCItem;
    /**
     * The item in the legs slot.
     */
    legItem?: MCItem;
    /**
     * The item in the feet slot.
     */
    bootItem?: MCItem;
    /**
     * The item in the hand slot.
     */
    handItem?: MCItem;
    /**
     * The item in the off hand slot.
     */
    offhandItem?: MCItem;
};

/**
 * Block data.
 */
type _MCBlock = {
    /**
     * The id of the block.
     */
    id?: MCID;
    /**
     * The tag of the block.
     */
    tag?: string;
    /**
     * The nbt data of the block.
     */
    nbt?: string;
};

/**
 * Fluid data.
 */
type _MCFluid = {
    /**
     * The id of the fluid.
     */
    id?: MCID;
    /**
     * The tag of the fluid.
     */
    tag?: string;
};

/**
 * State data.
 */
export type MCState = {
    /**
     * The id of the state.
     */
    state_name: string;
    /**
     * The value of the state.
     */
    state_value: string;
};

/**
 * Distance data.
 */
export type MCDistance = {
    /**
     * The absolute distance. Checks in all directions.
     */
    absolute?: MCNumber;
    /**
     * The horizontal distance. Checks only in the horizontal directions.
     */
    horizontal?: MCNumber;
    /**
     * The x distance. Checks only in the direction of the x axis.
     */
    x_axis?: MCNumber;
    /**
     * The y distance. Checks only in the direction of the y axis.
     */
    y_axis?: MCNumber;
    /**
     * The z distance. Checks only in the direction of the z axis.
     */
    z_axis?: MCNumber;
};

/**
 * Damage data.
 */
type _MCDamageType = {
    /**
     * Whether or not the damage bypasses armor (applies to the physical armor of the player).
     */
    bypassesArmor?: boolean;
    /**
     * Whether or not the damage bypasses invulnerability (applies to invulnerability from e.g. the invulnerable nbt tag or creative mode).
     */
    bypassesInvulnerability?: boolean;
    /**
     * Whether or not the damage bypasses magic (applies to potions).
     */
    bypassesMagic?: boolean;
    /**
     * Whether or not the damage is caused by an explosion.
     */
    isExplosion?: boolean;
    /**
     * Whether or not the damage is caused by fire.
     */
    isFire?: boolean;
    /**
     * Whether or not the damage is caused by magic (applies to potions and /kill commands).
     */
    isMagic?: boolean;
    /**
     * Whether or not the damage is caused by a projectile.
     */
    isProjectile?: boolean;
    /**
     * Whether or not the damage is caused by a lightnigh.
     */
    isLightning?: boolean;
    /**
     * The entity that physically caused the damage.
     */
    directEntity?: MCEntity;
    /**
     * The entity that caused the damaging entity to do the damage.
     */
    sourceEntity?: MCEntity;
};

/**
 * Entity status flags.
 */
type _MCEntityFlags = {
    /**
     * Whether or not the entity is on fire.
     */
    isOnFire?: boolean;
    /**
     * Whether or not the entity is sneaking.
     */
    isSneaking?: boolean;
    /**
     * Whether or not the entity is sprinting.
     */
    isSprinting?: boolean;
    /**
     * Whether or not the entity is swimming.
     */
    isSwimming?: boolean;
    /**
     * Whether or not the entity is a baby  .
     */
    isBaby?: boolean;
};

/**
 * An effect.
 */
type _MCEffect = {
    /**
     * The id of the effect.
     */
    effect_type?: MCID;
    /**
     * The duration of the effect.
     */
    duration?: MCNumber;
    /**
     * The strength of the effect.
     */
    amplifier?: MCNumber;
};

/**
 * A dimenson.
 */
type _MCDimension =
    | 'minecraft:overworld'
    | 'minecraft:the_nether'
    | 'minecraft:the_end';

/**
 * A feature / structure.
 */
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

/**
 * A location in the world.
 */
export type MCLocation = {
    /**
     * The biome the player has to be in.
     */
    biome?: MCID;
    /**
     * The block the player has to be standing on.
     */
    block?: _MCBlock;
    /**
     * The fluid the player has to be in.
     */
    fluid?: _MCFluid;
    /**
     * The dimension the player has to be in.
     */
    dimension?: _MCDimension;
    /**
     * The feature / structure the player has to be in.
     */
    feature?: _MCFeature;
    /**
     * The value on the x axis the player has to be on.
     */
    x_axis?: MCNumber;
    /**
     * The value on the y axis the player has to be on.
     */
    y_axis?: MCNumber;
    /**
     * The value on the z axis the player has to be on.
     */
    z_axis?: MCNumber;
    /**
     * The light level that the location has to be.
     */
    light_level?: MCNumber;
    /**
     * Whether or not the player has to be standing in campfire smoke.
     */
    smokey?: boolean;
};
/**
 * An Entity.
 * @see https://minecraft.fandom.com/wiki/Entity
 */
export type MCEntity = {
    /**
     * The id of the entity.
     */
    entity?: MCID;
    /**
     * The nbt data of the entity.
     */
    nbt?: string;
    /**
     * The distance to the entity.
     */
    distance?: MCDistance;
    /**
     * The effect the entity has to have.
     */
    effects?: _MCEffect;
    /**
     * The location data of the entity.
     */
    location?: MCLocation;
    /**
     * The flags the entity has to have.
     */
    flags?: _MCEntityFlags;
    /**
     * The equipment the entity has to have.
     */
    equipment?: _MCEquipment;
};

/**
 * Minecraft Damage
 */
export type MCDamage = {
    /**
     * Whether or not the damage was blocked.
     */
    blocked?: boolean;
    /**
     * How much damage was dealt.
     */
    dealt?: MCNumber;
    /**
     * How much damage was taken.
     */
    taken?: MCNumber;
    /**
     * The type of damage.
     */
    type?: _MCDamageType;
};
/**
 * An item slot.
 */
export type MCSlot = {
    /**
     * How many slots are empty.
     */
    empty?: MCNumber;
    /**
     * How many slots are completely full.
     */
    full?: MCNumber;
    /**
     * How many slots are partially full.
     */
    occupied?: MCNumber;
};
