import {
    MCAdvancementBackground,
    MCAdvancementCriteria,
    MCAdvancementType,
    _MCAdvancementCriteriaInterface,
} from '../util/dp_advancements_d';
import { MCID } from '../util/dp_main_d';
import { __MCDatapack } from './dp_main';

export class MCAdvancementBuilder {
    private advancement_id: string = '';
    private advancement_name: string = '';
    private advancement_description: string = '';
    private advancement_icon: string = '';
    private advancement_type: string = '';
    private advancement_parent: string = '';
    private advancement_settings: MCAdvancementSettings = {
        announceToChat: true,
        showToast: true,
        hidden: false,
    };
    private advancement_isRoot: boolean = false;
    private advancement_background: string = '';
    private advancement_criteria: MCAdvancementCriteria[] = [];
    // noinspection JSUnusedLocalSymbols
    public constructor() {}

    /**
     * Set this advancement to be a root advancement.
     * @param root If this advancement is a root advancement.
     * @returns Continue building this advancement.
     */
    public setRoot(root: boolean): this {
        this.advancement_isRoot = root;
        return this;
    }
    /**
     * Set the advancement id.
     * @param id The id of the advancement.
     * @returns Continue building the advancement.
     */
    public setId(id: string): this {
        this.advancement_id = id;
        return this;
    }
    /**
     * Set the name / title of the advancement.
     * @param name The name of the advancement.
     * @returns Continue building the advancement.
     */
    public setName(name: string): this {
        this.advancement_name = name;
        return this;
    }
    /**
     * Set the description of the advancement.
     * @param description The description of the advancement.
     * @returns Continue building the advancement.
     */
    public setDescription(description: string): this {
        this.advancement_description = description;
        return this;
    }
    /**
     * Set the icon of the advancement.
     * @param icon Set the icon of the advancement.
     * @returns Continue building the advancement.
     */
    public setIcon(icon: MCID): this {
        this.advancement_icon = icon;
        return this;
    }
    /**
     * Set the background of the advancement.
     * @param background Set the background of the advancement.
     * @returns Continue building the advancement.
     */
    public setBackground(background: MCAdvancementBackground): this {
        this.advancement_background = background;
        return this;
    }
    /**
     * Set the type of the advancement.
     * @param type Set the type of the advancement.
     * @returns Continue building the advancement.
     *
     * @property task - The advancement is a task.
     * @property challenge - The advancement is a challenge.
     * @property goal - The advancement is a goal.
     */
    public setType(type: MCAdvancementType): this {
        this.advancement_type = type;
        return this;
    }

    public setParent(parent: MCID): this {
        this.advancement_parent = parent;
        return this;
    }
    /**
     * Set the display settings of the advancement.
     * @param settings Set the display settings of the advancement.
     * @returns Continue building the advancement.
     *
     * @property showToast - Show a toast when the advancement is completed.
     * @property announceToChat - Announce the advancement to the chat.
     * @property hidden - Hide the advancement from the player until it is completed.
     */
    public setSettings(settings: MCAdvancementSettings): this {
        this.advancement_settings = settings;
        return this;
    }
    /**
     * Add a criteria to the advancement.
     * @param criteria_name The name of the criteria which is used to identify the criteria. This name is used to later add the criteria in requirements.
     * @param criteria_trigger The trigger of the criteria.
     * @param criteria_conditions Additional conditions for the criteria.
     * @returns Continue building the advancement.
     */
    public addCriteria<
        T extends keyof _MCAdvancementCriteriaInterface,
        E extends _MCAdvancementCriteriaInterface[T]
    >(
        criteria_name: string,
        criteria_trigger: T,
        criteria_conditions: E
    ): this {
        this.advancement_criteria.push({
            criteria_name,
            criteria_trigger,
            criteria_conditions,
        });
        return this;
    }

    /**
     * Build the advancement. The advancement is added to the datapack. You cannot edit the advancement data after this.
     */
    public build(): __MCDatapack {
        __MCDatapack.mc_advancements.push({
            advancement_id: this.advancement_id,
            advancement_name: this.advancement_name,
            advancement_description: this.advancement_description,
            advancement_icon: this.advancement_icon,
            advancement_type: this.advancement_type,
            advancement_parent: this.advancement_parent,
            advancement_settings: this.advancement_settings,
            advancement_isRoot: this.advancement_isRoot,
            advancement_background: this.advancement_background,
            advancement_criteria: this.advancement_criteria,
        });
        return new __MCDatapack();
    }
}
class MCAdvancementSettings {
    showToast: boolean = true;
    announceToChat: boolean = true;
    hidden: boolean = false;
    // noinspection JSUnusedLocalSymbols
    public constructor(
        showToast: boolean,
        announceToChat: boolean,
        hidden: boolean
    ) {
        this.showToast = showToast;
        this.announceToChat = announceToChat;
        this.hidden = hidden;
    }
}
