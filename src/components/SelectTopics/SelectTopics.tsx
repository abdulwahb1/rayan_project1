import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectTopics() {
  return (
    <div className="flex">
      <div className="flex">
        <Select>
          <SelectTrigger className="w-[100px] h-[30px] border border-[#8eaedf] bg-[#d7e3f4] bg-opacity-70 outline-none text-darkblueui font-medium">
            <SelectValue placeholder="Topics" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Lorem ipsum</SelectLabel>
              <SelectItem value="1">Lorem ipsum dolor </SelectItem>
              <SelectItem value="2">Lorem ipsum dolor </SelectItem>
              <SelectItem value="3">Lorem ipsum dolor </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex ml-2">
        <Select>
          <SelectTrigger className="w-[100px] h-[30px] border border-[#8eaedf] bg-[#d7e3f4] bg-opacity-70 text-darkblueui font-medium outline-none">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Lorem ipsum</SelectLabel>
              <SelectItem value="1">Lorem ipsum dolor </SelectItem>
              <SelectItem value="2">Lorem ipsum dolor </SelectItem>
              <SelectItem value="3">Lorem ipsum dolor </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex ml-2">
        <Select>
          <SelectTrigger className="w-[120px] h-[30px] border border-[#8eaedf] bg-[#d7e3f4] bg-opacity-70 text-darkblueui font-medium">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Lorem ipsum</SelectLabel>
              <SelectItem value="1">Lorem ipsum dolor </SelectItem>
              <SelectItem value="2">Lorem ipsum dolor </SelectItem>
              <SelectItem value="3">Lorem ipsum dolor </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
