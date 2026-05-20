import 'package:flutter/material.dart';

class CommandDefault extends StatefulWidget {
  const CommandDefault({super.key});

  @override
  State<CommandDefault> createState() => _CommandDefaultState();
}

class _CommandDefaultState extends State<CommandDefault> {
  final TextEditingController _controller = TextEditingController();
  String _search = '';
  String _selected = '';

  final List<Map<String, String>> _items = [
    {'value': 'calendar', 'label': 'Calendar', 'shortcut': '', 'group': 'Suggestions', 'keywords': 'schedule date'},
    {'value': 'search', 'label': 'Search', 'shortcut': '', 'group': 'Suggestions', 'keywords': 'find lookup'},
    {'value': 'profile', 'label': 'Profile', 'shortcut': '⌘P', 'group': 'Settings', 'keywords': 'account user'},
    {'value': 'billing', 'label': 'Billing', 'shortcut': '⌘B', 'group': 'Settings', 'keywords': 'payment subscription'},
    {'value': 'settings', 'label': 'Settings', 'shortcut': '⌘S', 'group': 'Settings', 'keywords': 'preferences config'},
  ];

  List<Map<String, String>> get _filtered {
    if (_search.isEmpty) return _items;
    final q = _search.toLowerCase();
    return _items.where((item) {
      final hay = '${item['value']} ${item['keywords']}'.toLowerCase();
      return hay.contains(q);
    }).toList();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final groups = <String, List<Map<String, String>>>{};
    for (final item in _filtered) {
      final g = item['group']!;
      groups.putIfAbsent(g, () => []).add(item);
    }

    return Container(
      width: 320,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(16), // --radius-large
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 16, offset: const Offset(0, 4))],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Input
          Container(
            decoration: const BoxDecoration(
              border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8))),
            ),
            child: Row(
              children: [
                const Padding(
                  padding: EdgeInsets.only(left: 12),
                  child: Icon(Icons.search, size: 16, color: Color(0xFF7A7272)), // --muted-foreground
                ),
                Expanded(
                  child: TextField(
                    controller: _controller,
                    onChanged: (v) => setState(() => _search = v),
                    style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
                    decoration: const InputDecoration(
                      hintText: 'Type a command or search…',
                      hintStyle: TextStyle(color: Color(0xFFB5B0AF)), // --placeholder
                      border: InputBorder.none,
                      contentPadding: EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                    ),
                  ),
                ),
              ],
            ),
          ),
          // List
          ConstrainedBox(
            constraints: const BoxConstraints(maxHeight: 300),
            child: _filtered.isEmpty
                ? const Padding(
                    padding: EdgeInsets.all(24),
                    child: Text('No results found.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 14, color: Color(0xFF7A7272), fontFamily: 'Lexend')),
                  )
                : ListView(
                    shrinkWrap: true,
                    padding: const EdgeInsets.all(4),
                    children: groups.entries.map((entry) {
                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            child: Text(entry.key,
                                style: const TextStyle(
                                    fontFamily: 'Lexend', fontSize: 12,
                                    fontWeight: FontWeight.w600, color: Color(0xFF7A7272))),
                          ),
                          ...entry.value.map((item) => Material(
                                color: _selected == item['value']
                                    ? const Color(0xFFFAFAFA)
                                    : Colors.transparent,
                                borderRadius: BorderRadius.circular(4),
                                child: InkWell(
                                  borderRadius: BorderRadius.circular(4),
                                  onTap: () => setState(() => _selected = item['value']!),
                                  child: Padding(
                                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                                    child: Row(
                                      children: [
                                        Text(item['label']!,
                                            style: const TextStyle(
                                                fontFamily: 'Lexend', fontSize: 14,
                                                color: Color(0xFF2E2B2B))),
                                        if (item['shortcut']!.isNotEmpty) ...[
                                          const Spacer(),
                                          Text(item['shortcut']!,
                                              style: const TextStyle(
                                                  fontSize: 12, color: Color(0xFF7A7272),
                                                  letterSpacing: 0.1)),
                                        ],
                                      ],
                                    ),
                                  ),
                                ),
                              )),
                        ],
                      );
                    }).toList(),
                  ),
          ),
        ],
      ),
    );
  }
}
