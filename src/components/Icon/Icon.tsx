import { ArrowLeftIcon } from "@/src/assets/icons/ArrowLeftIcon";
import { ArrowUpRightIcon } from "@/src/assets/icons/ArrowUpRightIcon";
import { PencilSimpleLineIcon } from "@/src/assets/icons/PencilSimpleLineIcon";
import { PlusIcon } from "@/src/assets/icons/PlusIcon";
import { TrashIcon } from "@/src/assets/icons/TrashIcon";
import { Pressable } from "react-native";

export interface IconBase {
    size?: number;
    color?: string;
}

export interface IconProps{
    name: IconName;
    color?: string;
    size?: number;
    onPress?: () => void;
}

export function Icon({
  name,
  color,
  size,
  onPress,
}: IconProps) {

      const SVGIcon = iconRegistry[name];


    if (onPress) {
        return (
          <Pressable>
            <SVGIcon color={color} size={size} />
          </Pressable>
        );
    }
    return <SVGIcon color={color} size={size} />;
};

const iconRegistry = {
    arrowUpRight: ArrowUpRightIcon,
    pencilSimpleLine: PencilSimpleLineIcon,
    plusIcon: PlusIcon,
    trashIcon: TrashIcon,
    arrowLeft: ArrowLeftIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;