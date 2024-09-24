import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { Input } from '../../ui/input';
import { useState } from 'react';
import { IoSearchOutline, IoCloseCircleOutline } from 'react-icons/io5';
import UserItem from './userItem';
import { Separator } from '@/components/ui/separator';

const SearchWithDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-16 w-full relative">
      <Card
        className={cn(
          'transition-all duration-1000 rounded-3xl absolute border-none p-0 position-relative w-full z-50',
          {
            'shadow-lg': open,
          },
        )}
      >
        <CardHeader className="p-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearchOutline size={24} className="stroke-current [&>*]:stroke-[24]" />
            </div>
            <Input
              className="rounded-full py-3 px-10"
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder="Type to start the search..."
            ></Input>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
              <div className="p-1  hover:bg-card rounded-full">
                <IoCloseCircleOutline className="[&>*]:stroke-[24]" size={24} />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent
          className={cn('transition-all overflow-hidden duration-1000 p-0', {
            'max-h-0 ease-out': !open,
            'max-h-screen ease-in': open,
          })}
        >
          <ol className="m-4 gap-1 flex flex-col">
            <li>
              <h2 className="font-semibold">Questions</h2>
              <Separator />
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground text-sm font-medium">
              <a>Prvi</a>
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground text-sm font-medium">
              Drugi
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground text-sm font-medium">
              Treci
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground text-sm font-medium">
              Cetvrti
            </li>
            <li className="px-2 py-1 cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground text-sm font-medium">
              Peti
            </li>
            <li>
              <h2 className="font-semibold">Users</h2>
              <Separator />
            </li>
            <li className="cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground">
              <UserItem username="shadcn" number={10} avatar="https://github.com/shadcn.png" />
            </li>
            <li className="cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground">
              <UserItem username="sakibo" number={10} avatar="https://github.com/shadcn.png" />
            </li>
            <li className="cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground">
              <UserItem username="ioman" number={10} avatar="https://github.com/shadcn.png" />
            </li>
            <li className="cursor-pointer hover:bg-primary rounded-full hover:text-primary-foreground">
              <UserItem username="hftkc" number={10} avatar="https://github.com/shadcn.png" />
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchWithDropdown;
