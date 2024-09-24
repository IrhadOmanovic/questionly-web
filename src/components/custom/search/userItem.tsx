import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserItemProps = {
  username: string;
  number: number;
  avatar: string;
};

const UserItem = ({ username, number, avatar }: UserItemProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{username}</span>
        <span className="text-xs font-normal text-subtle">{number} comments</span>
      </div>
    </div>
  );
};

export default UserItem;
