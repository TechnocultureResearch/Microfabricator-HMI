// @generated by protobuf-ts 2.2.2
// @generated from protobuf file "lightengine.proto" (package "microfabricator", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { on_off } from "./common";
/**
 * @generated from protobuf message microfabricator.LightEngineLock
 */
export interface LightEngineLock {
    /**
     * @generated from protobuf field: microfabricator.LightEngineLock.le_states state = 1;
     */
    state: LightEngineLock_le_states;
}
/**
 * @generated from protobuf enum microfabricator.LightEngineLock.le_states
 */
export enum LightEngineLock_le_states {
    /**
     * @generated from protobuf enum value: NULL_LE_STATE = 0;
     */
    NULL_LE_STATE = 0,
    /**
     * @generated from protobuf enum value: OPEN = 1;
     */
    OPEN = 1,
    /**
     * @generated from protobuf enum value: CLOSE = 2;
     */
    CLOSE = 2
}
/**
 * @generated from protobuf message microfabricator.ExposureSettings
 */
export interface ExposureSettings {
    /**
     * @generated from protobuf field: int32 duration_seconds = 1;
     */
    durationSeconds: number;
    /**
     * @generated from protobuf field: int32 intensity_percent = 2;
     */
    intensityPercent: number;
}
/**
 * @generated from protobuf message microfabricator.ExposureInitiate
 */
export interface ExposureInitiate {
    /**
     * @generated from protobuf field: microfabricator.ExposureSettings settings = 1;
     */
    settings?: ExposureSettings;
    /**
     * @generated from protobuf field: microfabricator.on_off state = 2;
     */
    state: on_off;
}
/**
 * @generated from protobuf message microfabricator.ProgressResponse
 */
export interface ProgressResponse {
    /**
     * @generated from protobuf field: int32 progress_percent = 1;
     */
    progressPercent: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LightEngineLock$Type extends MessageType<LightEngineLock> {
    constructor() {
        super("microfabricator.LightEngineLock", [
            { no: 1, name: "state", kind: "enum", T: () => ["microfabricator.LightEngineLock.le_states", LightEngineLock_le_states] }
        ]);
    }
    create(value?: PartialMessage<LightEngineLock>): LightEngineLock {
        const message = { state: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LightEngineLock>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LightEngineLock): LightEngineLock {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* microfabricator.LightEngineLock.le_states state */ 1:
                    message.state = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LightEngineLock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* microfabricator.LightEngineLock.le_states state = 1; */
        if (message.state !== 0)
            writer.tag(1, WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message microfabricator.LightEngineLock
 */
export const LightEngineLock = new LightEngineLock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExposureSettings$Type extends MessageType<ExposureSettings> {
    constructor() {
        super("microfabricator.ExposureSettings", [
            { no: 1, name: "duration_seconds", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "intensity_percent", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExposureSettings>): ExposureSettings {
        const message = { durationSeconds: 0, intensityPercent: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExposureSettings>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExposureSettings): ExposureSettings {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 duration_seconds */ 1:
                    message.durationSeconds = reader.int32();
                    break;
                case /* int32 intensity_percent */ 2:
                    message.intensityPercent = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExposureSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 duration_seconds = 1; */
        if (message.durationSeconds !== 0)
            writer.tag(1, WireType.Varint).int32(message.durationSeconds);
        /* int32 intensity_percent = 2; */
        if (message.intensityPercent !== 0)
            writer.tag(2, WireType.Varint).int32(message.intensityPercent);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message microfabricator.ExposureSettings
 */
export const ExposureSettings = new ExposureSettings$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExposureInitiate$Type extends MessageType<ExposureInitiate> {
    constructor() {
        super("microfabricator.ExposureInitiate", [
            { no: 1, name: "settings", kind: "message", T: () => ExposureSettings },
            { no: 2, name: "state", kind: "enum", T: () => ["microfabricator.on_off", on_off] }
        ]);
    }
    create(value?: PartialMessage<ExposureInitiate>): ExposureInitiate {
        const message = { state: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExposureInitiate>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExposureInitiate): ExposureInitiate {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* microfabricator.ExposureSettings settings */ 1:
                    message.settings = ExposureSettings.internalBinaryRead(reader, reader.uint32(), options, message.settings);
                    break;
                case /* microfabricator.on_off state */ 2:
                    message.state = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExposureInitiate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* microfabricator.ExposureSettings settings = 1; */
        if (message.settings)
            ExposureSettings.internalBinaryWrite(message.settings, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* microfabricator.on_off state = 2; */
        if (message.state !== 0)
            writer.tag(2, WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message microfabricator.ExposureInitiate
 */
export const ExposureInitiate = new ExposureInitiate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProgressResponse$Type extends MessageType<ProgressResponse> {
    constructor() {
        super("microfabricator.ProgressResponse", [
            { no: 1, name: "progress_percent", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ProgressResponse>): ProgressResponse {
        const message = { progressPercent: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProgressResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProgressResponse): ProgressResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 progress_percent */ 1:
                    message.progressPercent = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProgressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 progress_percent = 1; */
        if (message.progressPercent !== 0)
            writer.tag(1, WireType.Varint).int32(message.progressPercent);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message microfabricator.ProgressResponse
 */
export const ProgressResponse = new ProgressResponse$Type();
