import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { cn } from "shared/helpers";
import React, {
    ComponentProps,
    ComponentType,
    HTMLAttributes,
    LabelHTMLAttributes,
    ReactNode,
    useContext,
    useEffect,
} from "react";
import { InputContext, InputProvider } from "./context/InputContext";
import { useInput } from "./useInput";

export type ChildrenProps = {
    children: ReactNode;
};

type RootProps = HTMLAttributes<HTMLDivElement> & ChildrenProps;

const Root: React.FC<RootProps> = ({ children, className, ...props }) => {
    return (
        <InputProvider>
            <div
                className={cn(
                    "flex relative flex-col w-full h-fit items-start gap-1",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </InputProvider>
    );
};

type LabelProps = ChildrenProps & LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
    return (
        <label
            className={cn("text-gray-900 font-medium text-sm", className)}
            {...props}
        >
            {children}
        </label>
    );
};

type GroupProps = HTMLAttributes<HTMLDivElement> & ChildrenProps;

const Group: React.FC<GroupProps> = ({ children, className }) => {
    const { classNameSetter } = useContext(InputContext);
    const { groupClass } = useInput();
    return (
        <div className={cn(groupClass({ side: classNameSetter }), className)}>
            {children}
        </div>
    );
};

const Field = React.forwardRef<HTMLInputElement, ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
        const { classNameSetter } = useContext(InputContext);
        const { visibleError, inputError, inputClass, errorIcon } = useInput();
        return (
            <>
                <input
                    ref={ref}
                    className={cn(
                        inputClass({ side: classNameSetter }),
                        inputError,
                        className
                    )}
                    {...props}
                />
                <div
                    className={cn(
                        errorIcon({ side: classNameSetter }),
                        visibleError
                    )}
                >
                    <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                    />
                </div>
            </>
        );
    }
);

type AddOnProps = {
    Icon?: ComponentType<any>;
    side?: "left" | "right";
    children?: ReactNode;
    className?: string;
    iconClassName?: string;
};
const AddOn = ({
    Icon,
    side = "left",
    children,
    className,
    iconClassName,
}: AddOnProps) => {
    const { setPositionIcon, setAddOnIsIcon, classNameSetter, setUseAddIcon } =
        useContext(InputContext);
    const { iconClass, defaultAddOn } = useInput();

    useEffect(() => {
        setUseAddIcon(Icon === undefined);
        return () => {
            setUseAddIcon(false);
        };
    }, [Icon]);

    useEffect(() => {
        setPositionIcon(side);
        return () => {
            setPositionIcon("left");
        };
    }, [side]);

    useEffect(() => {
        setAddOnIsIcon(Icon !== undefined);
        return () => {
            setAddOnIsIcon(false);
        };
    }, [Icon]);

    if (children) {
        return (
            <div
                className={cn(
                    defaultAddOn({ side: classNameSetter }),
                    className
                )}
            >
                {children}
            </div>
        );
    }

    return (
        <div className={cn(iconClass({ side: classNameSetter }), className)}>
            {Icon && (
                <Icon className={cn("w-5 h-5 fill-gray-400", iconClassName)} />
            )}
        </div>
    );
};

const Helper: React.FC<ChildrenProps> = ({ children }) => {
    const { showError } = useContext(InputContext);

    return (
        <div
            className={cn(
                "bottom-[-1.1rem] text-xs text-gray-500 font-normal",
                showError ? "hidden" : "absolute"
            )}
        >
            {children}
        </div>
    );
};

type ErrorProps = ChildrenProps & {
    show?: boolean;
};

const Error = ({ children, show = false }: ErrorProps) => {
    const { setShowError } = useContext(InputContext);
    const { visibleError } = useInput();

    useEffect(() => {
        setShowError(show);
    }, [show]);

    return (
        <span
            className={cn(
                "absolute bottom-[-1.1rem] text-xs text-red-600",
                visibleError
            )}
        >
            {children}
        </span>
    );
};

export const Input = {
    Root,
    Label,
    Group,
    Field,
    Helper,
    AddOn,
    Error,
};
