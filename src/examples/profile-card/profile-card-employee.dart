import 'package:flutter/material.dart';

class ProfileCardEmployee extends StatelessWidget {
  const ProfileCardEmployee({super.key});

  static const _schedule = [
    (label: 'Mo', active: true),
    (label: 'Tu', active: false),
    (label: 'We', active: true),
    (label: 'Th', active: false),
    (label: 'Fr', active: true),
    (label: 'Sa', active: true),
  ];

  static const _tags = ['Excluded from Ratio', '+4h'];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Container(
        width: 244,
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(12),
          boxShadow: const [BoxShadow(color: Color(0x14000000), blurRadius: 16, offset: Offset(0, 8))],
        ),
        clipBehavior: Clip.hardEdge,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Cover image
            SizedBox(
              height: 128,
              width: double.infinity,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Positioned(
                    left: (244 - 236) / 2,
                    top: (128 - 120) / 2,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: Image.network(
                        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop',
                        width: 236,
                        height: 120,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  // Funding badge
                  Positioned(
                    bottom: (128 - 120) / 2,
                    right: (244 - 220) / 2,
                    child: Container(
                      height: 24,
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      decoration: BoxDecoration(
                        color: const Color(0xFFECFCCB), // --accent-lime
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.attach_money, size: 14, color: Color(0xFF65A30D)), // --success
                          const SizedBox(width: 4),
                          const Text('3M Funded', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w400, color: Color(0xFF3F6212))),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // Details
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Peter Harris', style: TextStyle(fontFamily: 'Lexend', fontSize: 15, fontWeight: FontWeight.w600, height: 1.47, color: Color(0xFF2E2B2B))),
                  const SizedBox(height: 8),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(children: [const Icon(Icons.home_outlined, size: 16, color: Color(0xFFADA5A5)), const SizedBox(width: 4), const Text('Crazy Critters (3-5 Years)', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFFADA5A5)))]),
                      const SizedBox(height: 4),
                      Row(children: [const Icon(Icons.badge_outlined, size: 16, color: Color(0xFFADA5A5)), const SizedBox(width: 4), const Text('BRX4ABRX4ABRX4A', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFFADA5A5)))]),
                      const SizedBox(height: 4),
                      Row(children: [const Icon(Icons.supervisor_account_outlined, size: 16, color: Color(0xFFADA5A5)), const SizedBox(width: 4), const Text('Level 3 Practitioner', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFFADA5A5)))]),
                    ],
                  ),
                  const SizedBox(height: 8),
                  // Schedule
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: _schedule.map((d) => Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: d.active ? const Color(0xFFD7E8FF) : const Color(0xFFF4F4F4),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(d.label, style: TextStyle(fontFamily: 'Lexend', fontSize: 11, fontWeight: FontWeight.w500, color: d.active ? const Color(0xFF2D70CF) : const Color(0xFF7A7272))),
                    )).toList(),
                  ),
                  const SizedBox(height: 8),
                  // Tags
                  Wrap(
                    spacing: 8,
                    runSpacing: 4,
                    children: _tags.map((tag) => Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(color: const Color(0xFFFAFAFA), borderRadius: BorderRadius.circular(99)),
                      child: Text(tag, style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w400, color: Color(0xFF7A7272))),
                    )).toList(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
