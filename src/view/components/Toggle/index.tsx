import { Switch } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import { IToggleType } from "./interface";
import { cn } from "shared/helpers";

const Toggle: React.FC<IToggleType> = ({
    defaultValue = false,
    value,
    onChange,
    children,
}) => {
    const [state, setState] = useState(defaultValue);

    const onHandleChange = (value: boolean) => {
        setState(value);
        onChange && onChange(value);
    };

    useMemo(() => {
        value && setState(value);
    }, [value]);

    const onRenderChildren = () => {
        if (!children) {
            return;
        }

        if (typeof children === "function") {
            return children({ enabled: state });
        }

        return children;
    };

    return (
        <Switch
            checked={value ?? state}
            onChange={onHandleChange}
            className={cn(
                state ? "bg-slate-700" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
            )}
        >
            {onRenderChildren()}
        </Switch>
    );
};

export default Toggle;
