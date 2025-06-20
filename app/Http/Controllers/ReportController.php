<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function librarianReport()
    {
        $borrowings = Borrowing::all();

        return view('report', [
            'borrowings' => $borrowings,
        ]);
    }

    public function librarianChart(Request $request)
    {
        $from_date = '0000-00-00';
        $to_date = now()->toDateString(); // Gets today's date as 'YYYY-MM-DD'

        $report = Borrowing::whereBetween('borrow_date', [$from_date, $to_date])
            ->orWhereBetween('return_date', [$from_date, $to_date])
            ->get();

        // Collect borrow counts by date
        $borrowCounts = $report->groupBy('borrow_date')->map->count();

        // Collect return counts by date (only for returned books)
        $returnCounts = $report->where('status', 'Returned')
            ->groupBy('return_date')
            ->map->count();

        // Merge both date sets
        $allDates = $borrowCounts->keys()->merge($returnCounts->keys())->unique()->sort();

        $chartData = $allDates->map(function ($date) use ($borrowCounts, $returnCounts) {
            return [
                'date' => $date,
                'borrows' => $borrowCounts->get($date, 0),
                'returned' => $returnCounts->get($date, 0),
            ];
        })->values();

        $borrowings = Borrowing::with('book')->latest()->get();

        return Inertia('librarian/report', [
            // 'borrowings' => $borrowings,
            'report' => $chartData,
        ]);
    }
}
