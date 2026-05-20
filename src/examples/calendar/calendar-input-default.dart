import 'package:flutter/material.dart';

class CalendarInputDefault extends StatefulWidget {
  const CalendarInputDefault({super.key});

  @override
  State<CalendarInputDefault> createState() => _CalendarInputDefaultState();
}

class _CalendarInputDefaultState extends State<CalendarInputDefault> {
  DateTime? _selected;

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime(2100),
    );
    if (picked != null) setState(() => _selected = picked);
  }

  String get _label {
    if (_selected == null) return 'Select date';
    return '${_selected!.day.toString().padLeft(2,'0')}/${_selected!.month.toString().padLeft(2,'0')}/${_selected!.year}';
  }

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: _pickDate,
      icon: const Icon(Icons.calendar_today_outlined, size: 14),
      label: Text(_label),
      style: OutlinedButton.styleFrom(
        foregroundColor: _selected != null ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272), // --foreground / --placeholder
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
