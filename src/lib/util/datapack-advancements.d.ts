import {
    MCAmount,
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
} from './datapack-main';

export type MCAdvancementType = 'task' | 'challenge' | 'goal';
export type MCAdvancementBackground =
    | _MCGUIAdvancementBackground
    | _MCBlockTextures;

declare type _MCGUIAdvancementBackground =
    `${string}:textures/gui/advancements/backgrounds/${string}.png`;
declare type _MCBlockTextures = `${string}:textures/blocks/${string}.png`;

export interface _MCAdvancementCriteriaInterface {
    'minecraft:bee_nest_destroyed': __MCAdvancementCriteria_BeeNestDestroyed;
    'minecraft:bred_animals': __MCAdvancementCriteria_BredAnimals;
    'minecraft:brewed_potion': __MCAdvancementCriteria_BrewedPotion;
    'minecraft:changed_dimension': __MCAdvancementCriteria_ChangedDimension;
    'minecraft:channeled_lightning': __MCAdvancementCriteria_ChanneledLightning;
    'minecraft:construct_beacon': __MCAdvancementCriteria_ConstructBeacon;
    'minecraft:consume_item': __MCAdvancementCriteria_ConsumeItem;
    'minecraft:cured_zombie_villager': __MCAdvancementCriteria_CuredZombieVillager;
    'minecraft:effects_changed': __MCAdvancementCriteria_EffectsChanged;
    'minecraft:enchanted_item': __MCAdvancementCriteria_EnchantedItem;
    'minecraft:enter_block': __MCAdvancementCriteria_EnterBlock;
    'minecraft:entity_hurt_player': __MCAdvancementCriteria_EntityHurtPlayer;
    'minecraft:entity_killed_player': __MCAdvancementCriteria_EntityKilledPlayer;
    'minecraft:filled_bucket': __MCAdvancementCriteria_FilledBucket;
    'minecraft:fishing_rod_hooked': __MCAdvancementCriteria_FishingRodHooked;
    'minecraft:hero_of_the_village': __MCAdvancementCriteria_HeroOfTheVillage;
    'minecraft:impossible': __MCAdvancementCriteria_Impossible;
    'minecraft:inventory_changed': __MCAdvancementCriteria_InventoryChanged;
    'minecraft:item_durability_changed': __MCAdvancementCriteria_ItemDurabilityChanged;
    'minecraft:item_used_on_block': __MCAdvancementCriteria_ItemUsedOnBlock;
    'minecraft:killed_by_crossbow': __MCAdvancementCriteria_KilledByCrossbow;
    'minecraft:levitation': __MCAdvancementCriteria_Levitation;
    'minecraft:location': __MCAdvancementCriteria_Location;
    'minecraft:nether_travel': __MCAdvancementCriteria_NetherTravel;
    'minecraft:placed_block': __MCAdvancementCriteria_PlacedBlock;
    'minecraft:player_generates_container_loot': __MCAdvancementCriteria_PlayerGeneratesContainerLoot;
    'minecraft:player_hurt_entity': __MCAdvancementCriteria_PlayerHurtEntity;
    'minecraft:player_interacted_with_entity': __MCAdvancementCriteria_PlayerInteractedWithEntity;
    'minecraft:player_killed_entity': __MCAdvancementCriteria_PlayerKilledEntity;
    'minecraft:recipe_unlocked': __MCAdvancementCriteria_RecipeUnlocked;
    'minecraft:safely_harvest_honey': __MCAdvancementCriteria_SafelyHarvestHoney;
    'minecraft:shot_crossbow': __MCAdvancementCriteria_ShotCrossbow;
    'minecraft:slept_in_bed': __MCAdvancementCriteria_SleptInBed;
    'minecraft:slide_down_block': __MCAdvancementCriteria_SlideDownBlock;
    'minecraft:summoned_entity': __MCAdvancementCriteria_SummonedEntity;
    'minecraft:tame_animal': __MCAdvancementCriteria_TameAnimal;
    'minecraft:target_hit': __MCAdvancementCriteria_TargetHit;
    'minecraft:thrown_item_picked_up_by_entity': __MCAdvancementCriteria_ThrownItemPickedUpByEntity;
    'minecraft:tick': __MCAdvancementCriteria_Tick;
    'minecraft:used_ender_eye': __MCAdvancementCriteria_UsedEnderEye;
    'minecraft:used_totem': __MCAdvancementCriteria_UsedTotem;
    'minecraft:villager_trade': __MCAdvancementCriteria_VillagerTrade;
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
export interface MCAdvancementCriteria {
    criteria_name: string;
    criteria_trigger: keyof _MCAdvancementCriteriaInterface;
    criteria_conditions: _MCAdvancementCriteriaInterface[keyof _MCAdvancementCriteriaInterface];
}

export interface MCAdvancementSettings {
    showToast: boolean;
    announceToChat: boolean;
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
    tier?: MCAmount;
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
    levels?: MCAmount;
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
    delta?: MCAmount;
    durability?: MCAmount;
    item?: MCItem;
}

interface __MCAdvancementCriteria_ItemUsedOnBlock {
    item?: MCItem;
    location?: MCLocation;
}

interface __MCAdvancementCriteria_KilledByCrossbow {
    unique_entity_types?: MCAmount;
    entities?: MCEntity[];
}

interface __MCAdvancementCriteria_Levitation {
    distance?: MCDistance;
    duration?: MCAmount;
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
    distance?: MCAmount;
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
