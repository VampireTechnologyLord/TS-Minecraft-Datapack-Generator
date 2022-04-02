import {
    MCAmount,
    MCEntity,
    MCID,
    MCItem,
    _MCDimension,
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
    item: MCItem;
}
//#endregion MCAdvancementCriteria
