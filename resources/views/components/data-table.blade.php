@props(['headers'])

<div class="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <table {{ $attributes->merge(['class' => 'min-w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300']) }}>
        <thead class="text-xs uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
                @foreach ($headers as $header)
                    <th scope="col" class="px-6 py-4 font-semibold whitespace-nowrap">{{ $header }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            {{ $slot }}
        </tbody>
    </table>
</div>
