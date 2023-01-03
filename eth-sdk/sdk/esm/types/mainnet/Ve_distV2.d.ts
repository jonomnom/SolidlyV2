import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface Ve_distV2Interface extends utils.Interface {
    functions: {
        "checkpoint_token()": FunctionFragment;
        "checkpoint_total_supply()": FunctionFragment;
        "claim(uint256)": FunctionFragment;
        "claim_many(uint256[])": FunctionFragment;
        "claimable(uint256)": FunctionFragment;
        "claimableFromMerged(uint256)": FunctionFragment;
        "depositor()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "last_token_time()": FunctionFragment;
        "mergeClaimable(uint256)": FunctionFragment;
        "setDepositor(address)": FunctionFragment;
        "start_time()": FunctionFragment;
        "time_cursor()": FunctionFragment;
        "time_cursor_of(uint256)": FunctionFragment;
        "timestamp()": FunctionFragment;
        "token()": FunctionFragment;
        "token_last_balance()": FunctionFragment;
        "tokens_per_week(uint256)": FunctionFragment;
        "user_epoch_of(uint256)": FunctionFragment;
        "ve_for_at(uint256,uint256)": FunctionFragment;
        "ve_supply(uint256)": FunctionFragment;
        "voting_escrow()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkpoint_token" | "checkpoint_total_supply" | "claim" | "claim_many" | "claimable" | "claimableFromMerged" | "depositor" | "governanceAddress" | "initialize" | "last_token_time" | "mergeClaimable" | "setDepositor" | "start_time" | "time_cursor" | "time_cursor_of" | "timestamp" | "token" | "token_last_balance" | "tokens_per_week" | "user_epoch_of" | "ve_for_at" | "ve_supply" | "voting_escrow"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkpoint_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoint_total_supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claim_many", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "claimable", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimableFromMerged", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "depositor", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "last_token_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "mergeClaimable", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setDepositor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "start_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "time_cursor", values?: undefined): string;
    encodeFunctionData(functionFragment: "time_cursor_of", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "token_last_balance", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens_per_week", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "user_epoch_of", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ve_for_at", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "ve_supply", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "voting_escrow", values?: undefined): string;
    decodeFunctionResult(functionFragment: "checkpoint_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint_total_supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim_many", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableFromMerged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last_token_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mergeClaimable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDepositor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "start_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_cursor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "time_cursor_of", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token_last_balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens_per_week", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user_epoch_of", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ve_for_at", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ve_supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voting_escrow", data: BytesLike): Result;
    events: {
        "CheckpointToken(uint256,uint256)": EventFragment;
        "Claimed(uint256,uint256,uint256,uint256)": EventFragment;
        "ClaimedFromMerged(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CheckpointToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimedFromMerged"): EventFragment;
}
export interface CheckpointTokenEventObject {
    time: BigNumber;
    tokens: BigNumber;
}
export type CheckpointTokenEvent = TypedEvent<[
    BigNumber,
    BigNumber
], CheckpointTokenEventObject>;
export type CheckpointTokenEventFilter = TypedEventFilter<CheckpointTokenEvent>;
export interface ClaimedEventObject {
    tokenId: BigNumber;
    amount: BigNumber;
    claim_epoch: BigNumber;
    max_epoch: BigNumber;
}
export type ClaimedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface ClaimedFromMergedEventObject {
    tokenId: BigNumber;
    amount: BigNumber;
}
export type ClaimedFromMergedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ClaimedFromMergedEventObject>;
export type ClaimedFromMergedEventFilter = TypedEventFilter<ClaimedFromMergedEvent>;
export interface Ve_distV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Ve_distV2Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        checkpoint_token(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkpoint_total_supply(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claim_many(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimableFromMerged(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositor(overrides?: CallOverrides): Promise<[string]>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_voting_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        last_token_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        mergeClaimable(_tokenIdFrom: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDepositor(_depositor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        start_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        time_cursor(overrides?: CallOverrides): Promise<[BigNumber]>;
        time_cursor_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        token_last_balance(overrides?: CallOverrides): Promise<[BigNumber]>;
        tokens_per_week(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        user_epoch_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        ve_for_at(_tokenId: PromiseOrValue<BigNumberish>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        ve_supply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        voting_escrow(overrides?: CallOverrides): Promise<[string]>;
    };
    checkpoint_token(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkpoint_total_supply(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claim_many(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    claimableFromMerged(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    depositor(overrides?: CallOverrides): Promise<string>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_voting_escrow: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    last_token_time(overrides?: CallOverrides): Promise<BigNumber>;
    mergeClaimable(_tokenIdFrom: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDepositor(_depositor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    start_time(overrides?: CallOverrides): Promise<BigNumber>;
    time_cursor(overrides?: CallOverrides): Promise<BigNumber>;
    time_cursor_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    timestamp(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;
    tokens_per_week(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    user_epoch_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    ve_for_at(_tokenId: PromiseOrValue<BigNumberish>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    ve_supply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    voting_escrow(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        checkpoint_token(overrides?: CallOverrides): Promise<void>;
        checkpoint_total_supply(overrides?: CallOverrides): Promise<void>;
        claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claim_many(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
        claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claimableFromMerged(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositor(overrides?: CallOverrides): Promise<string>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_voting_escrow: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        last_token_time(overrides?: CallOverrides): Promise<BigNumber>;
        mergeClaimable(_tokenIdFrom: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setDepositor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        start_time(overrides?: CallOverrides): Promise<BigNumber>;
        time_cursor(overrides?: CallOverrides): Promise<BigNumber>;
        time_cursor_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;
        tokens_per_week(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_epoch_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ve_for_at(_tokenId: PromiseOrValue<BigNumberish>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ve_supply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        voting_escrow(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CheckpointToken(uint256,uint256)"(time?: null, tokens?: null): CheckpointTokenEventFilter;
        CheckpointToken(time?: null, tokens?: null): CheckpointTokenEventFilter;
        "Claimed(uint256,uint256,uint256,uint256)"(tokenId?: null, amount?: null, claim_epoch?: null, max_epoch?: null): ClaimedEventFilter;
        Claimed(tokenId?: null, amount?: null, claim_epoch?: null, max_epoch?: null): ClaimedEventFilter;
        "ClaimedFromMerged(uint256,uint256)"(tokenId?: null, amount?: null): ClaimedFromMergedEventFilter;
        ClaimedFromMerged(tokenId?: null, amount?: null): ClaimedFromMergedEventFilter;
    };
    estimateGas: {
        checkpoint_token(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkpoint_total_supply(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claim_many(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claimableFromMerged(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositor(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_voting_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        last_token_time(overrides?: CallOverrides): Promise<BigNumber>;
        mergeClaimable(_tokenIdFrom: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDepositor(_depositor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        start_time(overrides?: CallOverrides): Promise<BigNumber>;
        time_cursor(overrides?: CallOverrides): Promise<BigNumber>;
        time_cursor_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;
        tokens_per_week(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        user_epoch_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ve_for_at(_tokenId: PromiseOrValue<BigNumberish>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        ve_supply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkpoint_token(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkpoint_total_supply(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claim_many(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableFromMerged(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_voting_escrow: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        last_token_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mergeClaimable(_tokenIdFrom: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDepositor(_depositor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        start_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        time_cursor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        time_cursor_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token_last_balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens_per_week(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user_epoch_of(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ve_for_at(_tokenId: PromiseOrValue<BigNumberish>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ve_supply(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
