// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {GlobalState} from '../../types/store';
import {PluginIntegration} from '../..//types/plugins';
export function getPluginIntegrations(state: GlobalState, location?: string): PluginIntegration[] {
    if (location) {
        return state.entities.plugins.mobilePluginIntegrations.filter((p) => {
            return p.location_type === location;
        });
    }
    return state.entities.plugins.mobilePluginIntegrations;
}