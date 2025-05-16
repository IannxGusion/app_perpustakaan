import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "@inertiajs/react"

export default function TabsDemo() {
    return (
        <div className="flex h-screen justify-center items-center">

            {/*1 */}
            <Card>
                <CardHeader>
                    <CardTitle>Pustakawan</CardTitle>
                    <CardDescription>
                        Ganti jadi Pustakawan.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className="w-full" asChild>
                        <Link href={route('main')}>Switch</Link>
                    </Button>
                </CardFooter>
            </Card>

            {/* 2 */}
            <Tabs defaultValue="Pustakawan" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Pustakawan">Pustakawan</TabsTrigger>
                    <TabsTrigger value="Admin">Admin</TabsTrigger>
                </TabsList>
                <TabsContent value="Pustakawan">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pustakawan</CardTitle>
                            <CardDescription>
                                Ganti jadi Pustakawan.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href={route('main')}>Switch</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Admin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin</CardTitle>
                            <CardDescription>
                                Ganti jadi Admin.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href={route('work')}>Switch</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

            </Tabs>

        </div>
    )
}
