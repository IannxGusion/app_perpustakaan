import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import type { Book, Category } from "@/types"
import CSRF from "@/components/element/csrf"
import { Textarea } from "@/components/ui/textarea"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

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
          <Table className="min-w-full border border-gray-300">
            <TableBody>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Id</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.id}</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Judul</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.title}</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Genre</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.category.name}</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Sampul</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">
                  <img
                    src={`/storage/${book.cover}`}
                    alt={book.title}
                    className="w-full h-full border border-slate-700 dark:border-slate-300"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Penulis</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.author}</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-300">
                <TableCell className="px-4 py-2 font-medium text-gray-700">Penerbit</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.publisher}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</TableCell>
                <TableCell className="px-4 py-2 text-gray-900">{book.publication_date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-4 py-2 font-medium text-gray-700">Status</TableCell>
                <TableCell className="px-4 py-2 text-gray-900 underline">{book.status}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </CardHeader>

        <form action={ route('crud_book.update', book.id) } method="PUT">
          <CSRF />

          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Judul</Label>
              <Input
                id="title" name="title"
                placeholder="Masukkan judul buku"
              />
            </div>

            <div>
              <Label htmlFor="content">Konten buku</Label>
              <Textarea
                id="content" name="content"
                placeholder="Masukkan Konten buku"
              />
            </div>

            <div>
              <Label htmlFor="cover">Sampul</Label>
              <Input
                id="cover" name="cover"
                type="file"
              />
            </div>

            <div>
              <Label htmlFor="author">Penulis</Label>
              <Input
                id="author" name="author"
                placeholder="Masukkan nama penulis"
              />
            </div>

            <div>
              <Label htmlFor="publisher">Penerbit</Label>
              <Input
                id="publisher" name="publisher"
                placeholder="Masukkan nama penerbit"
              />
            </div>

            <div>
              <Label htmlFor="publication_date">Tgl. Terbit</Label>
              <Input
                id="publication_date" name="publication_date"
                type="date"
              />
            </div>

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

              <Select>
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
