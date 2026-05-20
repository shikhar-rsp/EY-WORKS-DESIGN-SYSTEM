import 'package:flutter/material.dart';

class CalendarInputFilled extends StatefulWidget {
  const CalendarInputFilled({super.key});

  @override
  State<CalendarInputFilled> createState() => _CalendarInputFilledState();
}

class _CalendarInputFilledState extends State<CalendarInputFilled> {
  DateTime _selected = DateTime(2021, 10, 30);

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _selected,
      firstDate: DateTime(2000),
      lastDate: DateTime(2100),
    );
    if (picked != null) setState(() => _selected = picked);
  }

  String get _label =>
    '${_selected.day.toString().padLeft(2,'0')}/${_selected.month.toString().padLeft(2,'0')}/${_selected.year}';

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: _pickDate,
      icon: const Icon(Icons.calendar_today_outlined, size: 14),
      label: Text(_label),
      style: OutlinedButton.styleFrom(
        foregroundColor: const Color(0xFF2E2B2B), // --foreground
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 12),
        minimumSize: const Size(250, 38),
        alignment: Alignment.centerLeft,
        textStyle: const TextStyle(fontSize: 16),
      ),
    );
  }
}
