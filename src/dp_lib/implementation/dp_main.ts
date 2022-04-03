import { MCAdvancementData } from '../util/dp_advancements_d';
import { MCAdvancementBuilder } from './dp_advancements';

function buildDatapack() {}

/**
 *
 * @param datapack_name The name of the datapack.
 * @param datapack_id The id of the datapack.
 * @param datapack_description The description of the datapack.
 * @param datapack_data The data of the datapack.
 */
export function Datapack(
    datapack_name: string,
    datapack_id: string,
    datapack_description: string,
    datapack_data: (datapack: __MCDatapack) => void
): any {}

export function tess(arg1: string): string {
    return arg1;
}

/** Create new datapack. */
export class __MCDatapack {
    public static mc_advancements: MCAdvancementData[];
    // noinspection JSUnusedLocalSymbols
    public constructor() {}
    /**
     * Adds a new advancement to the datapack.
     */
    public addAdvancement(): MCAdvancementBuilder {
        return new MCAdvancementBuilder();
    }
    public printAdvancements(): any {
        console.log(__MCDatapack.mc_advancements);
        return __MCDatapack.mc_advancements;
    }
}
