
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-sydney-navy py-4 px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <h1 className="text-sydney-light text-2xl font-bold">Sydney<span className="text-sydney-coral">Events</span></h1>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex w-full max-w-md">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-0 focus-visible:ring-sydney-coral"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button type="submit" className="ml-2 bg-sydney-coral hover:bg-sydney-coral/90">
            Search
          </Button>
        </form>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="link" className="text-sydney-light">About</Button>
          <Button variant="link" className="text-sydney-light">Contact</Button>
        </div>
      </div>
    </header>
  );
}
