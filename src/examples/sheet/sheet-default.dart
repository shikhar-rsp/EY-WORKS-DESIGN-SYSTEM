import 'package:flutter/material.dart';

class SheetDefault extends StatefulWidget {
  const SheetDefault({super.key});

  @override
  State<SheetDefault> createState() => _SheetDefaultState();
}

class _SheetDefaultState extends State<SheetDefault> {
  void _openSheet() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFFFFFFFF), // --background
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.zero),
      ),
      builder: (context) => Padding(
        padding: const EdgeInsets.all(24), // --space-300
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Edit Profile',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w600,
                color: Color(0xFF2E2B2B), // --foreground
                fontFamily: 'Lexend',
              ),
            ),
            const SizedBox(height: 4),
            const Text(
              'Make changes to your profile here.',
              style: TextStyle(
                fontSize: 14,
                color: Color(0xFF7A7272), // --muted-foreground
                fontFamily: 'Lexend',
              ),
            ),
            const SizedBox(height: 16),
            const Text('Name', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            const SizedBox(height: 6),
            TextFormField(
              initialValue: 'Muhammad Hasan',
              decoration: InputDecoration(
                contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Color(0xFFADA5A5)),
                ),
              ),
            ),
            const SizedBox(height: 12),
            const Text('Username', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            const SizedBox(height: 6),
            TextFormField(
              initialValue: '@mhasan',
              decoration: InputDecoration(
                contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Color(0xFFADA5A5)),
                ),
              ),
            ),
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                OutlinedButton(
                  onPressed: () => Navigator.pop(context),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFF2E2B2B),
                    side: const BorderSide(color: Color(0xFFEBE9E8)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    minimumSize: const Size(0, 36),
                  ),
                  child: const Text('Cancel', style: TextStyle(fontFamily: 'Lexend', fontSize: 14)),
                ),
                const SizedBox(width: 12),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF8785E), // --primary
                    foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    minimumSize: const Size(0, 36),
                    elevation: 0,
                  ),
                  child: const Text('Save Changes', style: TextStyle(fontFamily: 'Lexend', fontSize: 14)),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: _openSheet,
      style: OutlinedButton.styleFrom(
        foregroundColor: const Color(0xFF2E2B2B), // --foreground
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)), // --radius-medium
        padding: const EdgeInsets.symmetric(horizontal: 16), // --space-200
        minimumSize: const Size(0, 36),
        textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500, fontFamily: 'Lexend'),
      ),
      child: const Text('Open Sheet'),
    );
  }
}
