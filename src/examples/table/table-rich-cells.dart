import 'package:flutter/material.dart';

class TableRichCells extends StatelessWidget {
  const TableRichCells({super.key});

  static const _rows = [
    {
      'initials': 'AJ',
      'name': 'Alice Johnson',
      'email': 'alice@example.com',
      'role': 'Designer',
      'roleBg': Color(0xFFD7E8FF), // --accent-blue
      'roleText': Color(0xFF2D70CF), // --info
      'score': '98',
      'trend': '+12%',
      'up': true,
    },
    {
      'initials': 'BS',
      'name': 'Bob Smith',
      'email': 'bob@example.com',
      'role': 'Engineer',
      'roleBg': Color(0xFFECFCCB), // --accent-lime
      'roleText': Color(0xFF65A30D), // --success
      'score': '84',
      'trend': '+5%',
      'up': true,
    },
    {
      'initials': 'CW',
      'name': 'Carol White',
      'email': 'carol@example.com',
      'role': 'PM',
      'roleBg': Color(0xFFE0E3F6), // --accent-purple
      'roleText': Color(0xFF505EAC), // --discovery
      'score': '72',
      'trend': '-3%',
      'up': false,
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16), // --radius-large
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFFEBE9E8)), // --border
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            children: [
              _buildHeader(),
              ..._rows.asMap().entries.map((e) => _buildRow(e.value, e.key == _rows.length - 1)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      color: const Color(0xFFF4F4F4), // --secondary
      height: 40,
      child: Row(
        children: [
          Expanded(flex: 3, child: _HeaderCell(label: 'User')),
          Expanded(flex: 2, child: _HeaderCell(label: 'Role')),
          Expanded(flex: 1, child: _HeaderCell(label: 'Score', alignRight: true, sortable: true)),
          Expanded(flex: 1, child: _HeaderCell(label: 'Trend', alignRight: true)),
        ],
      ),
    );
  }

  Widget _buildRow(Map<String, dynamic> row, bool isLast) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        border: isLast ? null : const Border(bottom: BorderSide(color: Color(0xFFEBE9E8))),
      ),
      height: 72,
      child: Row(
        children: [
          Expanded(
            flex: 3,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 16,
                    backgroundColor: const Color(0xFFF4F4F4), // --secondary
                    child: Text(
                      row['initials'] as String,
                      style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500, color: Color(0xFF7A7272)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(row['name'] as String, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
                      Text(row['email'] as String, style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272))),
                    ],
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            flex: 2,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                decoration: BoxDecoration(
                  color: row['roleBg'] as Color,
                  borderRadius: BorderRadius.circular(99),
                ),
                child: Text(
                  row['role'] as String,
                  style: TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500, color: row['roleText'] as Color),
                ),
              ),
            ),
          ),
          Expanded(
            flex: 1,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Text(
                row['score'] as String,
                textAlign: TextAlign.right,
                style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B)),
              ),
            ),
          ),
          Expanded(
            flex: 1,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Text(
                row['trend'] as String,
                textAlign: TextAlign.right,
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: (row['up'] as bool) ? const Color(0xFF65A30D) : const Color(0xFFCC0000), // --success / --destructive
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _HeaderCell extends StatelessWidget {
  final String label;
  final bool alignRight;
  final bool sortable;

  const _HeaderCell({required this.label, this.alignRight = false, this.sortable = false});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        mainAxisAlignment: alignRight ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: [
          Text(
            label.toUpperCase(),
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontWeight: FontWeight.w500,
              fontSize: 12,
              letterSpacing: 0.6,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
          if (sortable) ...[
            const SizedBox(width: 4),
            const Icon(Icons.unfold_more, size: 12, color: Color(0xFF7A7272)),
          ],
        ],
      ),
    );
  }
}
