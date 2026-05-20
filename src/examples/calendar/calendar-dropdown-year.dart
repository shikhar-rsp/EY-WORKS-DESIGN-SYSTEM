import 'package:flutter/material.dart';

class CalendarDropdownYear extends StatefulWidget {
  const CalendarDropdownYear({super.key});

  @override
  State<CalendarDropdownYear> createState() => _CalendarDropdownYearState();
}

class _CalendarDropdownYearState extends State<CalendarDropdownYear> {
  int _decadeStart = 2020;
  int? _selected = 2021;

  List<Map<String, dynamic>> get _cells => [
    {'value': _decadeStart - 1, 'inView': false},
    ...List.generate(10, (i) => {'value': _decadeStart + i, 'inView': true}),
    {'value': _decadeStart + 10, 'inView': false},
  ];

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
              IconButton(onPressed: () => setState(() => _decadeStart -= 10), icon: const Icon(Icons.chevron_left, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
              Text('$_decadeStart–${_decadeStart + 9}', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
              IconButton(onPressed: () => setState(() => _decadeStart += 10), icon: const Icon(Icons.chevron_right, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: 3,
              childAspectRatio: 2.5,
              crossAxisSpacing: 8,
              mainAxisSpacing: 16,
              children: _cells.map((cell) {
                final isSel = cell['value'] == _selected;
                final inView = cell['inView'] as bool;
                return GestureDetector(
                  onTap: inView ? () => setState(() => _selected = cell['value'] as int) : null,
                  child: Container(
                    decoration: BoxDecoration(
                      color: isSel ? const Color(0xFFF8785E) : Colors.transparent,
                      border: inView ? Border.all(color: const Color(0xFFEBE9E8)) : null,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Center(child: Text('${cell['value']}',
                      style: TextStyle(fontSize: 13, color: isSel ? Colors.white : inView ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272), fontWeight: isSel ? FontWeight.w600 : FontWeight.w400))),
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}
