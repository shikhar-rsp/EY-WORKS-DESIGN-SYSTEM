import 'package:flutter/material.dart';

class CalendarInputRanged extends StatefulWidget {
  const CalendarInputRanged({super.key});

  @override
  State<CalendarInputRanged> createState() => _CalendarInputRangedState();
}

class _CalendarInputRangedState extends State<CalendarInputRanged> {
  DateTimeRange? _range;

  Future<void> _pickRange() async {
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(2000),
      lastDate: DateTime(2100),
      initialDateRange: _range,
    );
    if (picked != null) setState(() => _range = picked);
  }

  String _fmt(DateTime d) =>
    '${d.day.toString().padLeft(2,'0')}/${d.month.toString().padLeft(2,'0')}/${d.year}';

  String get _label {
    if (_range == null) return 'Start date  ~  End date';
    return '${_fmt(_range!.start)}  ~  ${_fmt(_range!.end)}';
  }

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: _pickRange,
      icon: const Icon(Icons.calendar_today_outlined, size: 14),
      label: Text(_label),
      style: OutlinedButton.styleFrom(
        foregroundColor: _range != null ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272), // --foreground / --placeholder
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 12),
        minimumSize: const Size(320, 38),
        alignment: Alignment.centerLeft,
        textStyle: const TextStyle(fontSize: 14),
      ),
    );
  }
}
