import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //   const iconMap: { [key: string]: IconType } = {
  //     pc: FaWindows,
  //     playstation: FaPlaystation,
  //     xbox: FaXbox,
  //     nintendo: SiNintendo,
  //     mac: FaApple,
  //     linux: FaLinux,
  //     android: FaAndroid,
  //     ios: MdPhoneIphone,
  //     web: BsGlobe,
  //   };

  //   Error: react.children.only expected to recieve a single react
  //          element child.
  //   Issue: I can't use Icon component from chakra and type indexing with
  //          react icons (IconType) doesn't seem to be working with the map
  //          function for platforms. May have something to do with the object
  //          model "iconMap" or the imports.
  //     Goal: Render platform icons instead of platform names

  return (
    <HStack marginY={1} flexWrap="wrap">
      {platforms.map((platform) => (
        <Text color="gray.500">{platform.name}</Text>
        // <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
