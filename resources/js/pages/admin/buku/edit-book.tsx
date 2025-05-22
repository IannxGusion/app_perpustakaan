import * as React from "react"
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

type BookFormState = {
  title: string
  author: string
  category: string
  status: string
}

const categories = ["Fiction", "Non-fiction", "Biography", "Science", "Fantasy"]
const statuses = ["Available", "Checked Out", "Reserved", "Lost"]

export default function Edit() {
  const [formData, setFormData] = React.useState<BookFormState>({
    title: "",
    author: "",
    category: "",
    status: "",
  })

  const handleChange = (field: keyof BookFormState, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting Book Data:", formData)
    // Add submit logic here
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">

        <CardHeader>
          <CardTitle>Edit Book</CardTitle>
          <CardDescription>Update book information below</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter book title"
              />
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => handleChange("author", e.target.value)}
                placeholder="Enter author name"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select onValueChange={(value) => handleChange("category", value)} value={formData.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select onValueChange={(value) => handleChange("status", value)} value={formData.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end mt-5">
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
