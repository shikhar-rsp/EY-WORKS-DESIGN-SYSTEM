import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class KeyPairValueWithCopy extends StatefulWidget {
  const KeyPairValueWithCopy({super.key});

  @override
  State<KeyPairValueWithCopy> createState() => _KeyPairValueWithCopyState();
}

class _KeyPairValueWithCopyState extends State<KeyPairValueWithCopy> {
  int? _copiedIndex;

  static const _rows = [
    {'label': 'API Key', 'value': 'sk-1234567890abcdef', 'mono': true},
    {'label': 'Webhook URL', 'value': 'https://api.example.com/hooks/abc123', 'mono': false},
    {'label': 'Client ID', 'value': 'client_9f2e3d4c5b6a7890', 'mono': true},
  ];

  Future<void> _copy(String value, int index) async {
    await Clipboard.setData(ClipboardData(text: value));
    setState(() => _copiedIndex = index);
    await Future.delayed(const Duration(milliseconds: 1500));
    if (mounted) setState(() => _copiedIndex = null);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        children: _rows.asMap().entries.map((e) {
          final row = e.value;
          final isLast = e.key == _rows.length - 1;
          final isCopied = _copiedIndex == e.key;
          return Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(
                      width: 100,
                      child: Text(
                        row['label'] as String,
                        style: const TextStyle(
                          fontFamily: 'Lexend',
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          height: 1.43,
                          color: Color(0xFFADA5A5), // --subtlest
                        ),
                      ),
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              row['value'] as String,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(
                                fontFamily: (row['mono'] as bool) ? 'Courier New' : 'Lexend',
                                fontWeight: FontWeight.w500,
                                fontSize: 14,
                                height: 1.43,
                                color: const Color(0xFF2E2B2B), // --foreground
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          GestureDetector(
                            onTap: () => _copy(row['value'] as String, e.key),
                            child: Container(
                              width: 24,
                              height: 24,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(4), // --radius-small
                              ),
                              child: Icon(
                                isCopied ? Icons.check_rounded : Icons.copy_outlined,
                                size: 16,
                                color: isCopied ? const Color(0xFF65A30D) : const Color(0xFFADA5A5), // --success / --subtlest
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              if (!isLast) const Divider(height: 1, color: Color(0xFFEBE9E8)), // --border
            ],
          );
        }).toList(),
      ),
    );
  }
}
