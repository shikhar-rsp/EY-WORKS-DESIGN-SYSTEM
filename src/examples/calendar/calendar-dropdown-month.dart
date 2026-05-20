import 'package:flutter/material.dart';

class CalendarDropdownMonth extends StatefulWidget {
  const CalendarDropdownMonth({super.key});

  @override
  State<CalendarDropdownMonth> createState() => _CalendarDropdownMonthState();
}

class _CalendarDropdownMonthState extends State<CalendarDropdownMonth> {
  static const _months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  int _year = 2021;
  int? _selected = 9; // October (0-indexed)

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 280,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        border: Border.all(color: const Color(0xFFEBE9E8)),
        borderRadius: BorderRadius.circular(6),
        boxShadow: const [BoxShadow(color: Color(0x26000000), blurRadius: 16, offset: Offset(0, 8))],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            height: 40, padding: const EdgeInsets.symmetric(horizontal: 8),
            decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))),
            child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
              IconButton(onPressed: () => setState(() => _year--), icon: const Icon(Icons.chevron_left, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
              Text('$_year', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
              IconButton(onPressed: () => setState(() => _year++), icon: const Icon(Icons.chevron_right, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, childAspectRatio: 2.5, crossAxisSpacing: 8, mainAxisSpacing: 16),
              itemCount: 12,
              itemBuilder: (_, i) {
                final isSel = i == _selected;
                return GestureDetector(
                  onTap: () => setState(() => _selected = i),
                  child: Container(
                    decoration: BoxDecoration(
                      color: isSel ? const Color(0xFFF8785E) : Colors.transparent,
                      border: Border.all(color: const Color(0xFFEBE9E8)),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Center(child: Text(_months[i], style: TextStyle(fontSize: 13, color: isSel ? Colors.white : const Color(0xFF2E2B2B), fontWeight: isSel ? FontWeight.w600 : FontWeight.w400))),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
