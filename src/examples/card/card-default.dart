import 'package:flutter/material.dart';

class CardDefault extends StatelessWidget {
  const CardDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 288,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        boxShadow: const [
          BoxShadow(
            color: Color(0x14000000),
            blurRadius: 3,
            offset: Offset(0, 1),
          ),
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Card Title',
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF2E2B2B), // --foreground
                    height: 1.4,
                  ),
                ),
                SizedBox(height: 6),
                Text(
                  'Card description goes here.',
                  style: TextStyle(
                    fontSize: 14,
                    color: Color(0xFF7A7272), // --muted-foreground
                    height: 1.5,
                  ),
                ),
              ],
            ),
          ),
          // Content
          const Padding(
            padding: EdgeInsets.all(20),
            child: Text(
              'This is the main content area of the card. It can hold any content.',
              style: TextStyle(
                fontSize: 14,
                color: Color(0xFF505258), // --secondary-foreground
                height: 1.5,
              ),
            ),
          ),
          // Footer
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
            child: Row(
              children: [
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF8785E), // --primary
                    foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    minimumSize: const Size(40, 32),
                    elevation: 0,
                    textStyle: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Save'),
                ),
                const SizedBox(width: 8),
                OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFFF8785E), // --primary
                    side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    minimumSize: const Size(40, 32),
                    textStyle: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Cancel'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
