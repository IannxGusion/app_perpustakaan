import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import type { Book, Category } from "@/types"
import CSRF from "@/components/element/csrf"

import TableInfo from "@/components/element/table-info"

type EditProps = {
  book?: Book;
  categories?: Category[];
};

export default function Edit({ book, categories = [] }: EditProps) {

  if (!book) {
    return <div className="p-6 text-center text-gray-600">Undefined book data...</div>;
  }

  return (
    <div className="flex justify-center items-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">

        <CardHeader>
          <CardTitle>Edit Buku</CardTitle>
          <CardDescription className="mb-5"><h1>Update informasi buku</h1></CardDescription>

          <CardTitle className="mb-1 italic"><h2>info saat ini</h2></CardTitle>

          {/* TableInfo */}
          <TableInfo book={book} />
          
        </CardHeader>

        <form action={route('librarian.books.update', book.id)} method="POST" encType="multipart/form-data">
          <CSRF />

          {/* custom methot */}
          <input type="hidden" name="_method" value="PUT" />

          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="category_id">Kategori</Label>

              <Select
                name="category_id"
                defaultValue={String(book.category?.id)} // current category
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>

              <Select
                name="status"
                defaultValue={book.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Not Available">Not Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end mt-5">
            <Button type="submit">Simpan</Button>
          </CardFooter>

        </form>
      </Card >
    </div >
  )
}
