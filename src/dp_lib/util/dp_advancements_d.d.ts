import {
    MCNumber,
    MCDamage,
    MCDistance,
    MCEntity,
    MCID,
    MCItem,
    MCLocation,
    MCSlot,
    MCState,
    _MCDimension,
    _MCEffect,
} from './dp_main_d';
/**
 * The advancement type.
 * @property task - The advancement is a task.
 * @property challenge - The advancement is a challenge.
 * @property goal - The advancement is a goal.
 */
export type MCAdvancementType = 'task' | 'challenge' | 'goal';
/**
 * The advancement background.
 *
 * Can be either a path to a block image or to an advancement background. Both have to include the extension.
 */
export type MCAdvancementBackground =
    | _MCGUIAdvancementBackground
    | _MCBlockTextures;

declare type _MCGUIAdvancementBackground =
    `${string}:textures/gui/advancements/backgrounds/${string}.png`;
declare type _MCBlockTextures = `${string}:textures/blocks/${string}.png`;

/**
 * The advancements.
 */
export interface _MCAdvancementCriteriaInterface {
    /**
     * Triggers when a bee nest or bee hive is broken.
     */
    'minecraft:bee_nest_destroyed': __MCAdvancementCriteria_BeeNestDestroyed;
    /**
     * Triggers when the player breeds two animals.
     */
    'minecraft:bred_animals': __MCAdvancementCriteria_BredAnimals;
    /**
     * Triggers when the player brews a potion.
     */
    'minecraft:brewed_potion': __MCAdvancementCriteria_BrewedPotion;
    /**
     * Triggers when the player changes the dimension.
     */
    'minecraft:changed_dimension': __MCAdvancementCriteria_ChangedDimension;
    /**
     * Triggers when the player hit an entity with a lightning by using a trident with the `channeling` enchantment.
     */
    'minecraft:channeled_lightning': __MCAdvancementCriteria_ChanneledLightning;
    /**
     * Triggers when the player places a beacon on a beacon base, adds a layer to the beacon base or builds the beacon base initially.
     */
    'minecraft:construct_beacon': __MCAdvancementCriteria_ConstructBeacon;
    /**
     * Triggers when the player consumes an item like food or a potion.
     */
    'minecraft:consume_item': __MCAdvancementCriteria_ConsumeItem;
    /**
     * Triggers when the player cures a zombie villager.
     */
    'minecraft:cured_zombie_villager': __MCAdvancementCriteria_CuredZombieVillager;
    /**
     * Triggers when the player gets or looses effects.
     */
    'minecraft:effects_changed': __MCAdvancementCriteria_EffectsChanged;
    /**
     * Triggers when the player enchants an item in the enchanting table.
     */
    'minecraft:enchanted_item': __MCAdvancementCriteria_EnchantedItem;
    /**
     * Triggers when the player enters a block.
     */
    'minecraft:enter_block': __MCAdvancementCriteria_EnterBlock;
    /**
     * Triggers when an entity hurt the player.
     */
    'minecraft:entity_hurt_player': __MCAdvancementCriteria_EntityHurtPlayer;
    /**
     * Triggers when an entity killed the player.
     */
    'minecraft:entity_killed_player': __MCAdvancementCriteria_EntityKilledPlayer;
    /**
     * Triggers when the player fills a bucket with a liquid or an additional entity.
     */
    'minecraft:filled_bucket': __MCAdvancementCriteria_FilledBucket;
    /**
     * Triggers when the player hooks a fishing rod to an entity, an item or catches a fish.
     */
    'minecraft:fishing_rod_hooked': __MCAdvancementCriteria_FishingRodHooked;
    /**
     * Triggers when the player won a raid.
     */
    'minecraft:hero_of_the_village': __MCAdvancementCriteria_HeroOfTheVillage;
    /**
     * Triggers never. Used for testing or to be unlocked by a command or function.
     */
    'minecraft:impossible': __MCAdvancementCriteria_Impossible;
    /**
     * Triggers when the player's inventory is changed.
     */
    'minecraft:inventory_changed': __MCAdvancementCriteria_InventoryChanged;
    /**
     * Triggers when an item changes its durability.
     */
    'minecraft:item_durability_changed': __MCAdvancementCriteria_ItemDurabilityChanged;
    /**
     * Triggers when an item gets used on a block.
     */
    'minecraft:item_used_on_block': __MCAdvancementCriteria_ItemUsedOnBlock;
    /**
     * Triggers when a player kills an entity with a crossbow.
     */
    'minecraft:killed_by_crossbow': __MCAdvancementCriteria_KilledByCrossbow;
    /**
     * Triggers whenever the player is levitating.
     */
    'minecraft:levitation': __MCAdvancementCriteria_Levitation;
    /**
     * Triggers when the player is at a specific location.
     */
    'minecraft:location': __MCAdvancementCriteria_Location;
    /**
     * Triggers when the player has travelled from one dimension, to the nether and then back to that dimension.
     */
    'minecraft:nether_travel': __MCAdvancementCriteria_NetherTravel;
    /**
     * Triggers when the player places a block.
     */
    'minecraft:placed_block': __MCAdvancementCriteria_PlacedBlock;
    /**
     * Triggers when the player generates loot by opening a chest.
     */
    'minecraft:player_generates_container_loot': __MCAdvancementCriteria_PlayerGeneratesContainerLoot;
    /**
     * Triggers when a player hurts another entity.
     */
    'minecraft:player_hurt_entity': __MCAdvancementCriteria_PlayerHurtEntity;
    /**
     * Triggers when a player interacts with an entity.
     */
    'minecraft:player_interacted_with_entity': __MCAdvancementCriteria_PlayerInteractedWithEntity;
    /**
     * Triggers when a player kills another entity.
     */
    'minecraft:player_killed_entity': __MCAdvancementCriteria_PlayerKilledEntity;
    /**
     * Triggers when a player unlocks a new recipe.
     */
    'minecraft:recipe_unlocked': __MCAdvancementCriteria_RecipeUnlocked;
    /**
     * Triggers when the player safely harvests honey.
     */
    'minecraft:safely_harvest_honey': __MCAdvancementCriteria_SafelyHarvestHoney;
    /**
     * Triggers when the player shoots with a crossbow.
     */
    'minecraft:shot_crossbow': __MCAdvancementCriteria_ShotCrossbow;
    /**
     * Triggers when a player starts sleeping.
     */
    'minecraft:slept_in_bed': __MCAdvancementCriteria_SleptInBed;
    /**
     * Triggers when the player slides down a block.
     */
    'minecraft:slide_down_block': __MCAdvancementCriteria_SlideDownBlock;
    /**
     * Triggers when the player summons an entity.
     */
    'minecraft:summoned_entity': __MCAdvancementCriteria_SummonedEntity;
    /**
     * Triggers when the player tames an animal.
     */
    'minecraft:tame_animal': __MCAdvancementCriteria_TameAnimal;
    /**
     * Triggers when the player shoots a target block.
     */
    'minecraft:target_hit': __MCAdvancementCriteria_TargetHit;
    /**
     * Triggers when the player throws an item and it gets picked up by an entity.
     */
    'minecraft:thrown_item_picked_up_by_entity': __MCAdvancementCriteria_ThrownItemPickedUpByEntity;
    /**
     * Triggers every tick.
     */
    'minecraft:tick': __MCAdvancementCriteria_Tick;
    /**
     * Triggers when the player uses an ender eye.
     */
    'minecraft:used_ender_eye': __MCAdvancementCriteria_UsedEnderEye;
    /**
     * Triggers when the player dies but has a totem that thus gets used.
     */
    'minecraft:used_totem': __MCAdvancementCriteria_UsedTotem;
    /**
     * Triggers when the player trades with a villager.
     */
    'minecraft:villager_trade': __MCAdvancementCriteria_VillagerTrade;
    /**
     * Triggers when the player starts a raid.
     */
    'minecraft:voluntary_exile': __MCAdvancementCriteria_VoluntaryExile;
}

export interface MCAdvancementData {
    advancement_id: string;
    advancement_name: string;
    advancement_description: string;
    advancement_icon: string;
    advancement_type: string;
    advancement_parent: string;
    advancement_settings: MCAdvancementSettings;
    advancement_isRoot: boolean;
    advancement_background: string;
    advancement_criteria: MCAdvancementCriteria[];
}
/**
 * The advancement criteria data.
 */
export interface MCAdvancementCriteria {
    /**
     * The name of the criteria which is used to identify the criteria. This name is used to later add the criteria in requirements.
     */
    criteria_name: string;
    /**
     * The trigger of the criteria.
     */
    criteria_trigger: keyof _MCAdvancementCriteriaInterface;
    /**
     * Additional conditions for the criteria.
     */
    criteria_conditions: _MCAdvancementCriteriaInterface[keyof _MCAdvancementCriteriaInterface];
}

export interface MCAdvancementSettings {
    /**
     * Whether or not a toast should be displayed when the advancement is completed.
     */
    showToast: boolean;
    /**
     * Whather or not it should be announced in the chat when the advancement is completed.
     */
    announceToChat: boolean;
    /**
     * Whether or not the advancement should be hidden until the player has completed it.
     */
    hidden: boolean;
}

//#region MCAdvancementCriteria
interface __MCAdvancementCriteria_BeeNestDestroyed {
    destroyed_block?: 'minecraft:bee_nest' | 'minecraft:bee_hive';
    item_used?: MCItem;
    number_of_bees?: 1 | 2 | 3;
}

interface __MCAdvancementCriteria_BredAnimals {
    child?: MCEntity;
    parent?: MCEntity;
    partner?: MCEntity;
}

interface __MCAdvancementCriteria_BrewedPotion {
    potion: MCID;
}

interface __MCAdvancementCriteria_ChangedDimension {
    from?: _MCDimension;
    to?: _MCDimension;
}

interface __MCAdvancementCriteria_ChanneledLightning {
    entities?: MCEntity[];
}

interface __MCAdvancementCriteria_ConstructBeacon {
    tier?: MCNumber;
}

interface __MCAdvancementCriteria_ConsumeItem {
    item?: MCItem;
}

interface __MCAdvancementCriteria_CuredZombieVillager {
    cured_villager?: MCEntity;
    zombie_villager?: MCEntity;
}

interface __MCAdvancementCriteria_EffectsChanged {
    effects?: _MCEffect[];
}

interface __MCAdvancementCriteria_EnchantedItem {
    item?: MCItem;
    levels?: MCNumber;
}

interface __MCAdvancementCriteria_EnterBlock {
    block?: MCID;
    state?: MCState[];
}

interface __MCAdvancementCriteria_EntityHurtPlayer {
    damage?: MCDamage;
}

interface __MCAdvancementCriteria_EntityKilledPlayer {
    entity?: MCEntity;
    killing_blow?: MCDamage;
}

interface __MCAdvancementCriteria_FilledBucket {
    bucket?: MCID;
}

interface __MCAdvancementCriteria_FishingRodHooked {
    entity?: MCEntity;
    item?: MCItem;
    rod?: MCItem;
}

interface __MCAdvancementCriteria_HeroOfTheVillage {
    location?: MCLocation;
}

interface __MCAdvancementCriteria_Impossible {}

interface __MCAdvancementCriteria_InventoryChanged {
    items?: MCItem[];
    slots?: MCSlot;
}

interface __MCAdvancementCriteria_ItemDurabilityChanged {
    delta?: MCNumber;
    durability?: MCNumber;
    item?: MCItem;
}

interface __MCAdvancementCriteria_ItemUsedOnBlock {
    item?: MCItem;
    location?: MCLocation;
}

interface __MCAdvancementCriteria_KilledByCrossbow {
    unique_entity_types?: MCNumber;
    entities?: MCEntity[];
}

interface __MCAdvancementCriteria_Levitation {
    distance?: MCDistance;
    duration?: MCNumber;
}

interface __MCAdvancementCriteria_Location {
    location?: MCLocation;
}

interface __MCAdvancementCriteria_NetherTravel {
    distance?: MCDistance;
}

interface __MCAdvancementCriteria_PlacedBlock {
    block?: MCID;
    state?: MCState[];
    item?: MCItem;
    location?: MCLocation;
}

interface __MCAdvancementCriteria_PlayerGeneratesContainerLoot {
    loot_table?: MCID;
}

interface __MCAdvancementCriteria_PlayerHurtEntity {
    entity?: MCEntity;
    damage?: MCDamage;
}

interface __MCAdvancementCriteria_PlayerInteractedWithEntity {
    item?: MCItem;
    entity?: MCEntity;
}

interface __MCAdvancementCriteria_PlayerKilledEntity {
    entity?: MCEntity;
    killing_blow?: MCDamage;
}

interface __MCAdvancementCriteria_RecipeUnlocked {
    recipe?: MCID;
}

interface __MCAdvancementCriteria_SafelyHarvestHoney {
    block?: 'minecraft:bee_nest' | 'minecraft:bee_hive';
    tag?: string;
    item?: MCItem;
}

interface __MCAdvancementCriteria_ShotCrossbow {
    item?: MCItem;
}

interface __MCAdvancementCriteria_SleptInBed {
    location?: MCLocation;
}

interface __MCAdvancementCriteria_SlideDownBlock {
    block?: MCID;
}

interface __MCAdvancementCriteria_SummonedEntity {
    entity?:
        | 'minecraft:iron_golem'
        | 'minecraft:snow_golem'
        | 'minecraft:ender_dragon'
        | 'minecraft:wither';
}

interface __MCAdvancementCriteria_TameAnimal {
    animal?: MCEntity;
}

interface __MCAdvancementCriteria_TargetHit {
    signal_strength?:
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
        | 15;
    projectile?: `${string}:${string}_arrow`;
    shooter?: MCEntity;
}

interface __MCAdvancementCriteria_ThrownItemPickedUpByEntity {
    entity?: MCEntity;
    item?: MCItem;
}

interface __MCAdvancementCriteria_Tick {}

interface __MCAdvancementCriteria_UsedEnderEye {
    distance?: MCNumber;
}

interface __MCAdvancementCriteria_UsedTotem {
    item?: MCItem;
}

interface __MCAdvancementCriteria_VillagerTrade {
    item?: MCItem;
    villager?: MCEntity;
}

interface __MCAdvancementCriteria_VoluntaryExile {
    location?: MCLocation;
}
//#endregion MCAdvancementCriteria
