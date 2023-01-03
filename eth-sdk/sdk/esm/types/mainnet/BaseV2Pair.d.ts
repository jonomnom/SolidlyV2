import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace BaseV2Pair {
    type ObservationStruct = {
        timestamp: PromiseOrValue<BigNumberish>;
        reserve0Cumulative: PromiseOrValue<BigNumberish>;
        reserve1Cumulative: PromiseOrValue<BigNumberish>;
    };
    type ObservationStructOutput = [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
    };
}
export interface BaseV2PairInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "blockTimestampLast()": FunctionFragment;
        "burn(address)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "current(address,uint256)": FunctionFragment;
        "currentCumulativePrices()": FunctionFragment;
        "decimals()": FunctionFragment;
        "factoryAddress()": FunctionFragment;
        "feeRatio()": FunctionFragment;
        "fees()": FunctionFragment;
        "getAmountOut(uint256,address)": FunctionFragment;
        "getReserves()": FunctionFragment;
        "governanceAddress()": FunctionFragment;
        "initialize(address,address,bool)": FunctionFragment;
        "lastObservation()": FunctionFragment;
        "metadata()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "observationLength()": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "prices(address,uint256,uint256)": FunctionFragment;
        "quote(address,uint256,uint256)": FunctionFragment;
        "reserve0()": FunctionFragment;
        "reserve0CumulativeLast()": FunctionFragment;
        "reserve1()": FunctionFragment;
        "reserve1CumulativeLast()": FunctionFragment;
        "sample(address,uint256,uint256,uint256)": FunctionFragment;
        "skim(address)": FunctionFragment;
        "stable()": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "sync()": FunctionFragment;
        "syncFees()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "tokens()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "blockTimestampLast" | "burn" | "claimFees" | "current" | "currentCumulativePrices" | "decimals" | "factoryAddress" | "feeRatio" | "fees" | "getAmountOut" | "getReserves" | "governanceAddress" | "initialize" | "lastObservation" | "metadata" | "mint" | "name" | "nonces" | "observationLength" | "observations" | "permit" | "prices" | "quote" | "reserve0" | "reserve0CumulativeLast" | "reserve1" | "reserve1CumulativeLast" | "sample" | "skim" | "stable" | "swap" | "symbol" | "sync" | "syncFees" | "token0" | "token1" | "tokens" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "blockTimestampLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "current", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "currentCumulativePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factoryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "governanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "lastObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "observationLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "prices", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quote", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "sample", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "skim", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "syncFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockTimestampLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentCumulativePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observationLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sample", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Burn(address,uint256,uint256,address)": EventFragment;
        "Claim(address,address,uint256,uint256)": EventFragment;
        "Fees(address,uint256,uint256)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "Swap(address,uint256,uint256,uint256,uint256,address)": EventFragment;
        "Sync(uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Fees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BurnEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
    to: string;
}
export type BurnEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface ClaimEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type ClaimEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], ClaimEventObject>;
export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export interface FeesEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type FeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], FeesEventObject>;
export type FeesEventFilter = TypedEventFilter<FeesEvent>;
export interface MintEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface SwapEventObject {
    sender: string;
    amount0In: BigNumber;
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
    to: string;
}
export type SwapEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], SwapEventObject>;
export type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface SyncEventObject {
    reserve0: BigNumber;
    reserve1: BigNumber;
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;
export type SyncEventFilter = TypedEventFilter<SyncEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface BaseV2Pair extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseV2PairInterface;
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
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        blockTimestampLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        current(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        factoryAddress(overrides?: CallOverrides): Promise<[string] & {
            _factory: string;
        }>;
        feeRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        fees(overrides?: CallOverrides): Promise<[string]>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<[string] & {
            _governanceAddress: string;
        }>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<[BaseV2Pair.ObservationStructOutput]>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string,
            BigNumber
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
            _feeRatio: BigNumber;
        }>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        observationLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
        }>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        reserve0(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[boolean]>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        syncFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    current(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    currentCumulativePrices(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
        blockTimestamp: BigNumber;
    }>;
    decimals(overrides?: CallOverrides): Promise<number>;
    factoryAddress(overrides?: CallOverrides): Promise<string>;
    feeRatio(overrides?: CallOverrides): Promise<BigNumber>;
    fees(overrides?: CallOverrides): Promise<string>;
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    governanceAddress(overrides?: CallOverrides): Promise<string>;
    initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastObservation(overrides?: CallOverrides): Promise<BaseV2Pair.ObservationStructOutput>;
    metadata(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string,
        BigNumber
    ] & {
        dec0: BigNumber;
        dec1: BigNumber;
        r0: BigNumber;
        r1: BigNumber;
        st: boolean;
        t0: string;
        t1: string;
        _feeRatio: BigNumber;
    }>;
    mint(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    observationLength(overrides?: CallOverrides): Promise<BigNumber>;
    observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
    }>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    reserve0(overrides?: CallOverrides): Promise<BigNumber>;
    reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    skim(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<boolean>;
    swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    sync(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    syncFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    tokens(overrides?: CallOverrides): Promise<[string, string]>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            claimed0: BigNumber;
            claimed1: BigNumber;
        }>;
        current(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<number>;
        factoryAddress(overrides?: CallOverrides): Promise<string>;
        feeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        fees(overrides?: CallOverrides): Promise<string>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        governanceAddress(overrides?: CallOverrides): Promise<string>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        lastObservation(overrides?: CallOverrides): Promise<BaseV2Pair.ObservationStructOutput>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string,
            BigNumber
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
            _feeRatio: BigNumber;
        }>;
        mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
        }>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<boolean>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        sync(overrides?: CallOverrides): Promise<void>;
        syncFees(overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null): ApprovalEventFilter;
        "Burn(address,uint256,uint256,address)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, to?: PromiseOrValue<string> | null): BurnEventFilter;
        Burn(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, to?: PromiseOrValue<string> | null): BurnEventFilter;
        "Claim(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): ClaimEventFilter;
        Claim(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): ClaimEventFilter;
        "Fees(address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): FeesEventFilter;
        Fees(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): FeesEventFilter;
        "Mint(address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        Mint(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        "Swap(address,uint256,uint256,uint256,uint256,address)"(sender?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null, to?: PromiseOrValue<string> | null): SwapEventFilter;
        Swap(sender?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null, to?: PromiseOrValue<string> | null): SwapEventFilter;
        "Sync(uint256,uint256)"(reserve0?: null, reserve1?: null): SyncEventFilter;
        Sync(reserve0?: null, reserve1?: null): SyncEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        current(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        factoryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        feeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        fees(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        governanceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastObservation(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        syncFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        tokens(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blockTimestampLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        current(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observationLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        syncFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: PromiseOrValue<string>, dst: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
