
import { TextPacket } from "bdsx/bds/packets";
import { nethook } from "bdsx/nethook";
import { CANCEL, MinecraftPacketIds } from "./bdsx";
import "./sb";

nethook.before(MinecraftPacketIds.Text).on((pk,ni)=>{
    console.log({
        name: pk.name,
        message: pk.message,
        type: pk.type,
    });
});

import "./bdsx-image-maps";


nethook.before(MinecraftPacketIds.ChangeDimension).on((pk,ni)=>{
    console.log(pk.dimensionId);
    return CANCEL;
})